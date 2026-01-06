import { describe, it, expect } from 'vitest';
import { productDescription } from './index';

describe('Product Resource', () => {
	it('should have operation property', () => {
		const operationProperty = productDescription.find((p) => p.name === 'operation');
		expect(operationProperty).toBeDefined();
		expect(operationProperty?.type).toBe('options');
	});

	it('should have all CRUD operations', () => {
		const operationProperty = productDescription.find((p) => p.name === 'operation');
		const operations = operationProperty?.options?.map((opt) => opt.value) || [];

		expect(operations).toContain('create');
		expect(operations).toContain('get');
		expect(operations).toContain('getAll');
		expect(operations).toContain('update');
		expect(operations).toContain('delete');
	});

	it('should have productId property for get operation', () => {
		const productIdProperty = productDescription.find((p) => p.name === 'productId');
		expect(productIdProperty).toBeDefined();
		expect(productIdProperty?.type).toBe('string');
		expect(productIdProperty?.required).toBe(true);
	});

	it('should have default operation', () => {
		const operationProperty = productDescription.find((p) => p.name === 'operation');
		expect(operationProperty?.default).toBe('getAll');
	});

	it('should have routing configured for operations', () => {
		const operationProperty = productDescription.find((p) => p.name === 'operation');
		const createOption = operationProperty?.options?.find((opt) => opt.value === 'create');
		const getOption = operationProperty?.options?.find((opt) => opt.value === 'get');
		const deleteOption = operationProperty?.options?.find((opt) => opt.value === 'delete');

		expect(createOption?.routing?.request?.method).toBe('POST');
		expect(createOption?.routing?.request?.url).toBe('/products');

		expect(getOption?.routing?.request?.method).toBe('GET');
		expect(getOption?.routing?.request?.url).toBe('=/products/{{$parameter.productId}}');

		expect(deleteOption?.routing?.request?.method).toBe('DELETE');
		expect(deleteOption?.routing?.request?.url).toBe('=/products/{{$parameter.productId}}');
	});
});

