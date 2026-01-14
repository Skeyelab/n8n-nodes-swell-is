/**
 * Test file for order fulfillment check logic
 * Run with: node order-fulfillment-check.test.js
 */

const { checkOrderFulfillment, extractOrderNumber } = require('./order-fulfillment-check');

// Sample data from the provided JSON
const testData = {
	results: [
		{
			id: "6897914f598c1000127cb384",
			number: "110326",
			delivered: true,
			status: "complete",
			date_updated: "2025-10-20T18:20:49.778Z"
		},
		{
			id: "689790687eea610011e8485a",
			number: "109951",
			delivered: true,
			status: "complete",
			date_updated: "2025-10-29T19:36:32.762Z"
		}
	],
	data: [
		{
			id: 106433,
			subject: "Re: Order 110326 confirmed",
			updated_at: "2025-08-20T19:46:33Z"
		},
		{
			id: 106403,
			subject: "Re: Order 109951 confirmed",
			updated_at: "2025-08-20T19:46:35Z"
		}
	]
};

// Test extractOrderNumber function
console.log('Testing extractOrderNumber:');
console.log('  "Re: Order 110326 confirmed" ->', extractOrderNumber("Re: Order 110326 confirmed"));
console.log('  "Re: Order 109951 confirmed" ->', extractOrderNumber("Re: Order 109951 confirmed"));
console.log('  "No order here" ->', extractOrderNumber("No order here"));
console.log('');

// Test main function
console.log('Testing checkOrderFulfillment:');
const result = checkOrderFulfillment(testData);
console.log('  Result:', result);
console.log('  Expected: true (orders were updated after tickets)');
console.log('');

// Test case where order was updated before ticket
const testDataBeforeTicket = {
	results: [
		{
			number: "110326",
			delivered: true,
			status: "complete",
			date_updated: "2025-08-10T18:20:49.778Z" // Before ticket
		}
	],
	data: [
		{
			subject: "Re: Order 110326 confirmed",
			updated_at: "2025-08-20T19:46:33Z" // After order update
		}
	]
};

console.log('Testing order updated before ticket:');
const resultBefore = checkOrderFulfillment(testDataBeforeTicket);
console.log('  Result:', resultBefore);
console.log('  Expected: false (order updated before ticket)');
console.log('');

// Test case with unfulfilled order
const testDataUnfulfilled = {
	results: [
		{
			number: "110326",
			delivered: false,
			status: "pending",
			date_updated: "2025-10-20T18:20:49.778Z"
		}
	],
	data: [
		{
			subject: "Re: Order 110326 confirmed",
			updated_at: "2025-08-20T19:46:33Z"
		}
	]
};

console.log('Testing unfulfilled order:');
const resultUnfulfilled = checkOrderFulfillment(testDataUnfulfilled);
console.log('  Result:', resultUnfulfilled);
console.log('  Expected: false (order not fulfilled)');
