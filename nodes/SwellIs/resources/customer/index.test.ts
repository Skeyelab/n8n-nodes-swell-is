import { describe, it, expect } from 'vitest';
import { customerDescription } from './index';

describe('Customer Resource', () => {
	it('should have operation property', () => {
		const operationProperty = customerDescription.find((p) => p.name === 'operation');
		expect(operationProperty).toBeDefined();
		expect(operationProperty?.type).toBe('options');
	});

	it('should have all CRUD operations', () => {
		const operationProperty = customerDescription.find((p) => p.name === 'operation');
		const operations = operationProperty?.options?.map((opt) => opt.value) || [];

		expect(operations).toContain('create');
		expect(operations).toContain('get');
		expect(operations).toContain('getAll');
		expect(operations).toContain('update');
	});

	it('should have default operation', () => {
		const operationProperty = customerDescription.find((p) => p.name === 'operation');
		expect(operationProperty?.default).toBe('getAll');
	});

	it('should have routing configured for operations', () => {
		const operationProperty = customerDescription.find((p) => p.name === 'operation');
		const createOption = operationProperty?.options?.find((opt) => opt.value === 'create');
		const getOption = operationProperty?.options?.find((opt) => opt.value === 'get');
		const updateOption = operationProperty?.options?.find((opt) => opt.value === 'update');

		expect(createOption?.routing?.request?.method).toBe('POST');
		expect(createOption?.routing?.request?.url).toBe('/accounts');

		expect(getOption?.routing?.request?.method).toBe('GET');
		expect(updateOption?.routing?.request?.method).toBe('PUT');
	});

	describe('GetAll Filters', () => {
		it('should NOT have email filter in GetAll (emails are unique, use Get operation)', () => {
			const emailFilter = customerDescription.find(
				(p) => p.name === 'email' && p.displayOptions?.show?.operation?.includes('getAll'),
			);
			expect(emailFilter).toBeUndefined();
		});

		it('should have tags filter', () => {
			const tagsFilter = customerDescription.find((p) => p.name === 'tags');
			expect(tagsFilter).toBeDefined();
			expect(tagsFilter?.type).toBe('string');
			expect(tagsFilter?.displayName).toBe('Tags');
			expect(tagsFilter?.routing?.send?.type).toBe('query');
			expect(tagsFilter?.routing?.send?.property).toBe('tags');
		});

		it('should have created_from filter', () => {
			const createdFromFilter = customerDescription.find((p) => p.name === 'created_from');
			expect(createdFromFilter).toBeDefined();
			expect(createdFromFilter?.type).toBe('string');
			expect(createdFromFilter?.displayName).toBe('Created From');
			expect(createdFromFilter?.routing?.send?.type).toBe('query');
			expect(createdFromFilter?.routing?.send?.property).toBe('created_from');
		});

		it('should have created_to filter', () => {
			const createdToFilter = customerDescription.find((p) => p.name === 'created_to');
			expect(createdToFilter).toBeDefined();
			expect(createdToFilter?.type).toBe('string');
			expect(createdToFilter?.displayName).toBe('Created To');
			expect(createdToFilter?.routing?.send?.type).toBe('query');
			expect(createdToFilter?.routing?.send?.property).toBe('created_to');
		});

		it('should have group filter', () => {
			const groupFilter = customerDescription.find((p) => p.name === 'group');
			expect(groupFilter).toBeDefined();
			expect(groupFilter?.type).toBe('string');
			expect(groupFilter?.displayName).toBe('Group');
			expect(groupFilter?.routing?.send?.type).toBe('query');
			expect(groupFilter?.routing?.send?.property).toBe('group');
		});

		it('should show filters only for getAll operation', () => {
			const tagsFilter = customerDescription.find((p) => p.name === 'tags');
			expect(tagsFilter?.displayOptions?.show).toEqual({
				operation: ['getAll'],
				resource: ['customer'],
			});
		});
	});

	describe('Get Operation - Lookup Type', () => {
		it('should have lookupType selector', () => {
			const lookupTypeProperty = customerDescription.find((p) => p.name === 'lookupType');
			expect(lookupTypeProperty).toBeDefined();
			expect(lookupTypeProperty?.type).toBe('options');
			expect(lookupTypeProperty?.displayName).toBe('Lookup Type');
			expect(lookupTypeProperty?.default).toBe('id');
		});

		it('should have id and email options in lookupType', () => {
			const lookupTypeProperty = customerDescription.find((p) => p.name === 'lookupType');
			const options = lookupTypeProperty?.options?.map((opt) => opt.value) || [];
			expect(options).toContain('id');
			expect(options).toContain('email');
		});

		it('should show customerId when lookupType is id', () => {
			const customerIdProperty = customerDescription.find((p) => p.name === 'customerId');
			expect(customerIdProperty).toBeDefined();
			expect(customerIdProperty?.type).toBe('string');
			expect(customerIdProperty?.required).toBe(true);
			expect(customerIdProperty?.displayOptions?.show).toEqual({
				operation: ['get'],
				resource: ['customer'],
				lookupType: ['id'],
			});
		});

		it('should show email field when lookupType is email', () => {
			const emailProperty = customerDescription.find(
				(p) => p.name === 'email' && p.displayOptions?.show?.operation?.includes('get'),
			);
			expect(emailProperty).toBeDefined();
			expect(emailProperty?.type).toBe('string');
			expect(emailProperty?.required).toBe(true);
			expect(emailProperty?.displayOptions?.show).toEqual({
				operation: ['get'],
				resource: ['customer'],
				lookupType: ['email'],
			});
		});

		it('should have routing for ID lookup', () => {
			const operationProperty = customerDescription.find((p) => p.name === 'operation');
			const getOption = operationProperty?.options?.find((opt) => opt.value === 'get');
			expect(getOption?.routing?.request?.method).toBe('GET');
			expect(getOption?.routing?.request?.url).toContain('lookupType');
			expect(getOption?.routing?.request?.url).toContain('accounts');
		});

		it('should have routing configured for email lookup', () => {
			const emailProperty = customerDescription.find(
				(p) => p.name === 'email' && p.displayOptions?.show?.operation?.includes('get'),
			);
			expect(emailProperty?.routing?.send?.type).toBe('query');
			expect(emailProperty?.routing?.send?.property).toBe('email');
		});
	});
});

