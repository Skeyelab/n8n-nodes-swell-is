/**
 * n8n Code Node - Check if orders were fulfilled after tickets
 *
 * This code should be pasted directly into an n8n Code node.
 * It expects the input data to have 'results' (orders) and 'data' (tickets) arrays.
 */

// Extract order number from ticket subject (e.g., "Re: Order 110326 confirmed" -> "110326")
function extractOrderNumber(subject) {
	const match = subject.match(/Order\s+(\d+)/i);
	return match ? match[1] : null;
}

// Get the input data (assuming it comes from previous node)
const inputData = $input.all()[0].json;

// Extract orders and tickets from input
const orders = inputData.results || [];
const tickets = inputData.data || [];

// Create a map of order numbers to order objects for quick lookup
const ordersByNumber = new Map();
orders.forEach(order => {
	if (order.number) {
		ordersByNumber.set(order.number, order);
	}
});

let allFulfilledAfterTickets = true;
const results = [];

// Process each ticket
for (const ticket of tickets) {
	const orderNumber = extractOrderNumber(ticket.subject);

	if (!orderNumber) {
		results.push({
			ticket_id: ticket.id,
			ticket_subject: ticket.subject,
			order_number: null,
			order_found: false,
			fulfilled_after_ticket: false,
			reason: 'Could not extract order number from ticket subject'
		});
		continue;
	}

	const order = ordersByNumber.get(orderNumber);

	if (!order) {
		results.push({
			ticket_id: ticket.id,
			ticket_subject: ticket.subject,
			order_number: orderNumber,
			order_found: false,
			fulfilled_after_ticket: false,
			reason: 'Order not found in results'
		});
		allFulfilledAfterTickets = false;
		continue;
	}

	// Convert date strings to timestamps for comparison
	const ticketUpdatedAt = new Date(ticket.updated_at).getTime();
	const orderUpdatedAt = new Date(order.date_updated).getTime();

	// Check if order was fulfilled
	const isFulfilled = order.delivered === true || order.status === 'complete';

	// Check if order was updated after ticket was updated
	const wasUpdatedAfterTicket = orderUpdatedAt > ticketUpdatedAt;

	const fulfilledAfterTicket = isFulfilled && wasUpdatedAfterTicket;

	if (!fulfilledAfterTicket) {
		allFulfilledAfterTickets = false;
	}

	results.push({
		ticket_id: ticket.id,
		ticket_subject: ticket.subject,
		ticket_updated_at: ticket.updated_at,
		order_number: orderNumber,
		order_found: true,
		order_delivered: order.delivered,
		order_status: order.status,
		order_updated_at: order.date_updated,
		fulfilled_after_ticket: fulfilledAfterTicket,
		reason: !isFulfilled
			? 'Order not fulfilled (delivered=false or status!=complete)'
			: !wasUpdatedAfterTicket
			? 'Order was not updated after ticket'
			: 'Order fulfilled after ticket'
	});
}

// Return the result
return [{
	json: {
		all_fulfilled_after_tickets: allFulfilledAfterTickets,
		details: results
	}
}];
