/**
 * Determines if customer orders have been fulfilled after Zendesk tickets were received.
 *
 * Expected input structure:
 * {
 *   results: Array<Order>, // Order fulfillment data
 *   data: Array<Ticket>    // Zendesk ticket data
 * }
 *
 * Returns: boolean - true if all orders referenced in tickets have been fulfilled after ticket creation/update
 */

// Extract order numbers from ticket subject (e.g., "Re: Order 110326 confirmed" -> "110326")
function extractOrderNumber(subject) {
	const match = subject.match(/Order\s+(\d+)/i);
	return match ? match[1] : null;
}

// Main function to check if orders were fulfilled after tickets
function checkOrderFulfillment(input) {
	const { results = [], data = [] } = input;

	// Create a map of order numbers to order objects for quick lookup
	const ordersByNumber = new Map();
	results.forEach(order => {
		if (order.number) {
			ordersByNumber.set(order.number, order);
		}
	});

	// Process each ticket
	for (const ticket of data) {
		const orderNumber = extractOrderNumber(ticket.subject);

		if (!orderNumber) {
			// If we can't extract order number from ticket, we can't verify fulfillment
			// You may want to handle this case differently based on your requirements
			continue;
		}

		const order = ordersByNumber.get(orderNumber);

		if (!order) {
			// Order not found in results - cannot verify fulfillment
			// You may want to return false here if all orders must be present
			continue;
		}

		// Convert date strings to timestamps for comparison
		const ticketUpdatedAt = new Date(ticket.updated_at).getTime();
		const orderUpdatedAt = new Date(order.date_updated).getTime();

		// Check if order was fulfilled after ticket was updated
		// Order is considered fulfilled if:
		// 1. delivered === true OR status === 'complete'
		// 2. order was updated after the ticket was updated
		const isFulfilled = (order.delivered === true || order.status === 'complete');
		const wasUpdatedAfterTicket = orderUpdatedAt > ticketUpdatedAt;

		if (!isFulfilled || !wasUpdatedAfterTicket) {
			// At least one order was not fulfilled after the ticket
			return false;
		}
	}

	// All orders referenced in tickets have been fulfilled after tickets were received
	return true;
}

// For n8n Code node usage:
// Replace $input with the actual input data structure
// Example usage:
// const input = $input.all()[0].json;
// return [{ json: { fulfilled: checkOrderFulfillment(input) } }];

module.exports = { checkOrderFulfillment, extractOrderNumber };
