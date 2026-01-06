import { describe, it, expect } from 'vitest';
import { orderDescription } from './index';

describe('Order Resource', () => {
	it('should have operation property', () => {
		const operationProperty = orderDescription.find((p) => p.name === 'operation');
		expect(operationProperty).toBeDefined();
		expect(operationProperty?.type).toBe('options');
	});

	it('should have all CRUD operations', () => {
		const operationProperty = orderDescription.find((p) => p.name === 'operation');
		const operations = operationProperty?.options?.map((opt) => opt.value) || [];

		expect(operations).toContain('create');
		expect(operations).toContain('get');
		expect(operations).toContain('getAll');
		expect(operations).toContain('update');
	});

	it('should have orderId property for get operation', () => {
		const orderIdProperty = orderDescription.find((p) => p.name === 'orderId');
		expect(orderIdProperty).toBeDefined();
		expect(orderIdProperty?.type).toBe('string');
		expect(orderIdProperty?.required).toBe(true);
	});

	it('should have default operation', () => {
		const operationProperty = orderDescription.find((p) => p.name === 'operation');
		expect(operationProperty?.default).toBe('getAll');
	});

	it('should have routing configured for operations', () => {
		const operationProperty = orderDescription.find((p) => p.name === 'operation');
		const createOption = operationProperty?.options?.find((opt) => opt.value === 'create');
		const getOption = operationProperty?.options?.find((opt) => opt.value === 'get');
		const updateOption = operationProperty?.options?.find((opt) => opt.value === 'update');

		expect(createOption?.routing?.request?.method).toBe('POST');
		expect(createOption?.routing?.request?.url).toBe('/orders');

		expect(getOption?.routing?.request?.method).toBe('GET');
		expect(getOption?.routing?.request?.url).toBe('=/orders/{{$parameter.orderId}}');

		expect(updateOption?.routing?.request?.method).toBe('PUT');
		expect(updateOption?.routing?.request?.url).toBe('=/orders/{{$parameter.orderId}}');
	});

	describe('GetAll Filters', () => {
		it('should have filters collection', () => {
			const filtersCollection = orderDescription.find((p) => p.name === 'filters');
			expect(filtersCollection).toBeDefined();
			expect(filtersCollection?.type).toBe('collection');
			expect(filtersCollection?.displayName).toBe('Filters');
		});

		it('should show filters collection only when returnAll is false', () => {
			const filtersCollection = orderDescription.find((p) => p.name === 'filters');
			expect(filtersCollection?.displayOptions?.show).toEqual({
				operation: ['getAll'],
				resource: ['order'],
				returnAll: [false],
			});
		});

		it('should have account_id filter option in filters collection', () => {
			const filtersCollection = orderDescription.find((p) => p.name === 'filters');
			const accountIdFilter = filtersCollection?.options?.find((opt) => opt.name === 'account_id');
			expect(accountIdFilter).toBeDefined();
			expect(accountIdFilter?.type).toBe('string');
			expect(accountIdFilter?.displayName).toBe('Account ID');
			expect(accountIdFilter?.routing?.send?.type).toBe('query');
			expect(accountIdFilter?.routing?.send?.property).toBe('account_id');
		});

		it('should have email filter option in filters collection', () => {
			const filtersCollection = orderDescription.find((p) => p.name === 'filters');
			const emailFilter = filtersCollection?.options?.find((opt) => opt.name === 'email');
			expect(emailFilter).toBeDefined();
			expect(emailFilter?.type).toBe('string');
			expect(emailFilter?.displayName).toBe('Email');
			expect(emailFilter?.routing?.send?.type).toBe('query');
			expect(emailFilter?.routing?.send?.property).toBe('email');
		});

		it('should have created_from filter option in filters collection', () => {
			const filtersCollection = orderDescription.find((p) => p.name === 'filters');
			const createdFromFilter = filtersCollection?.options?.find((opt) => opt.name === 'created_from');
			expect(createdFromFilter).toBeDefined();
			expect(createdFromFilter?.type).toBe('string');
			expect(createdFromFilter?.displayName).toBe('Created From');
			expect(createdFromFilter?.routing?.send?.type).toBe('query');
			expect(createdFromFilter?.routing?.send?.property).toBe('created_from');
		});

		it('should have created_to filter option in filters collection', () => {
			const filtersCollection = orderDescription.find((p) => p.name === 'filters');
			const createdToFilter = filtersCollection?.options?.find((opt) => opt.name === 'created_to');
			expect(createdToFilter).toBeDefined();
			expect(createdToFilter?.type).toBe('string');
			expect(createdToFilter?.displayName).toBe('Created To');
			expect(createdToFilter?.routing?.send?.type).toBe('query');
			expect(createdToFilter?.routing?.send?.property).toBe('created_to');
		});

		it('should have total_min filter option in filters collection', () => {
			const filtersCollection = orderDescription.find((p) => p.name === 'filters');
			const totalMinFilter = filtersCollection?.options?.find((opt) => opt.name === 'total_min');
			expect(totalMinFilter).toBeDefined();
			expect(totalMinFilter?.type).toBe('number');
			expect(totalMinFilter?.displayName).toBe('Total Min');
			expect(totalMinFilter?.routing?.send?.type).toBe('query');
			expect(totalMinFilter?.routing?.send?.property).toBe('total_min');
		});

		it('should have total_max filter option in filters collection', () => {
			const filtersCollection = orderDescription.find((p) => p.name === 'filters');
			const totalMaxFilter = filtersCollection?.options?.find((opt) => opt.name === 'total_max');
			expect(totalMaxFilter).toBeDefined();
			expect(totalMaxFilter?.type).toBe('number');
			expect(totalMaxFilter?.displayName).toBe('Total Max');
			expect(totalMaxFilter?.routing?.send?.type).toBe('query');
			expect(totalMaxFilter?.routing?.send?.property).toBe('total_max');
		});
	});
});

