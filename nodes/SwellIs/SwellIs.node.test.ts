import { describe, it, expect } from 'vitest';
import { SwellIs } from './SwellIs.node';

describe('SwellIs Node', () => {
	it('should have correct display name', () => {
		const node = new SwellIs();
		expect(node.description.displayName).toBe('Swell');
	});

	it('should have correct name', () => {
		const node = new SwellIs();
		expect(node.description.name).toBe('swellIs');
	});

	it('should have icon defined', () => {
		const node = new SwellIs();
		expect(node.description.icon).toBeDefined();
		expect(node.description.icon.light).toBe('file:swellIs.svg');
		expect(node.description.icon.dark).toBe('file:swellIs.dark.svg');
	});

	it('should have correct group', () => {
		const node = new SwellIs();
		expect(node.description.group).toEqual(['transform']);
	});

	it('should have credentials configured', () => {
		const node = new SwellIs();
		expect(node.description.credentials).toBeDefined();
		expect(node.description.credentials?.length).toBe(1);
		expect(node.description.credentials?.[0].name).toBe('swellIsApi');
		expect(node.description.credentials?.[0].required).toBe(true);
	});

	it('should have request defaults configured', () => {
		const node = new SwellIs();
		expect(node.description.requestDefaults).toBeDefined();
		expect(node.description.requestDefaults?.baseURL).toBe('https://api.swell.store');
		expect(node.description.requestDefaults?.headers).toBeDefined();
		expect(node.description.requestDefaults?.headers?.['Accept']).toBe('application/json');
		expect(node.description.requestDefaults?.headers?.['Content-Type']).toBe('application/json');
	});

	it('should have resource options', () => {
		const node = new SwellIs();
		const resourceProperty = node.description.properties.find((p) => p.name === 'resource');
		expect(resourceProperty).toBeDefined();
		expect(resourceProperty?.type).toBe('options');
		expect(resourceProperty?.options).toBeDefined();
		expect(resourceProperty?.options?.length).toBe(5);

		const resourceValues = resourceProperty?.options?.map((opt) => opt.value) || [];
		expect(resourceValues).toContain('product');
		expect(resourceValues).toContain('order');
		expect(resourceValues).toContain('customer');
		expect(resourceValues).toContain('category');
		expect(resourceValues).toContain('user');
	});

	it('should have default resource', () => {
		const node = new SwellIs();
		const resourceProperty = node.description.properties.find((p) => p.name === 'resource');
		expect(resourceProperty?.default).toBe('product');
	});

	it('should have operation properties for each resource', () => {
		const node = new SwellIs();
		const properties = node.description.properties;

		// Check for operation properties
		const operationProperties = properties.filter((p) => p.name === 'operation');
		expect(operationProperties.length).toBeGreaterThan(0);
	});
});

