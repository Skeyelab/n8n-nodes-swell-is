/**
 * Simple n8n Code Node - Returns true/false
 *
 * Paste this directly into an n8n Code node.
 * Assumes input data has 'results' (orders) and 'data' (tickets) arrays.
 */

// Extract order number from ticket subject
function extractOrderNumber(subject) {
	const match = subject.match(/Order\s+(\d+)/i);
	return match ? match[1] : null;
}

// Get input data
const inputData = $input.all()[0].json;
const orders = inputData.results || [];
const tickets = inputData.data || [];

// Create map of order numbers to orders
const ordersByNumber = new Map();
orders.forEach(order => {
	if (order.number) {
		ordersByNumber.set(order.number, order);
	}
});

// Check each ticket
for (const ticket of tickets) {
	const orderNumber = extractOrderNumber(ticket.subject);
	if (!orderNumber) continue;

	const order = ordersByNumber.get(orderNumber);
	if (!order) continue;

	// Check if order was fulfilled and updated after ticket
	const ticketTime = new Date(ticket.updated_at).getTime();
	const orderTime = new Date(order.date_updated).getTime();

	const isFulfilled = order.delivered === true || order.status === 'complete';
	const updatedAfterTicket = orderTime > ticketTime;

	if (!isFulfilled || !updatedAfterTicket) {
		return [{ json: { fulfilled: false } }];
	}
}

return [{ json: { fulfilled: true } }];
