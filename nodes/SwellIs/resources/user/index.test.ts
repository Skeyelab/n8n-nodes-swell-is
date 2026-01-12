import { describe, it, expect } from 'vitest';
import { userDescription } from './index';

describe('User Resource', () => {
	it('should have operation property', () => {
		const operationProperty = userDescription.find((p) => p.name === 'operation');
		expect(operationProperty).toBeDefined();
		expect(operationProperty?.type).toBe('options');
	});

	it('should have all CRUD operations', () => {
		const operationProperty = userDescription.find((p) => p.name === 'operation');
		const operations = operationProperty?.options?.map((opt) => opt.value) || [];

		expect(operations).toContain('create');
		expect(operations).toContain('get');
		expect(operations).toContain('getAll');
		expect(operations).toContain('update');
		expect(operations).toContain('delete');
	});

	it('should have userId property for get operation', () => {
		const userIdProperty = userDescription.find((p) => p.name === 'userId');
		expect(userIdProperty).toBeDefined();
		expect(userIdProperty?.type).toBe('string');
	});

	it('should have default operation', () => {
		const operationProperty = userDescription.find((p) => p.name === 'operation');
		expect(operationProperty?.default).toBe('getAll');
	});

	it('should have routing configured for operations', () => {
		const operationProperty = userDescription.find((p) => p.name === 'operation');
		const createOption = operationProperty?.options?.find((opt) => opt.value === 'create');
		const getOption = operationProperty?.options?.find((opt) => opt.value === 'get');
		const updateOption = operationProperty?.options?.find((opt) => opt.value === 'update');
		const deleteOption = operationProperty?.options?.find((opt) => opt.value === 'delete');

		expect(createOption?.routing?.request?.method).toBe('POST');
		expect(createOption?.routing?.request?.url).toBe('/users');

		expect(getOption?.routing?.request?.method).toBe('GET');
		expect(getOption?.routing?.request?.url).toBe('=/users/{{$parameter.userId}}');

		expect(updateOption?.routing?.request?.method).toBe('PUT');
		expect(updateOption?.routing?.request?.url).toBe('=/users/{{$parameter.userId}}');

		expect(deleteOption?.routing?.request?.method).toBe('DELETE');
		expect(deleteOption?.routing?.request?.url).toBe('=/users/{{$parameter.userId}}');
	});
});

