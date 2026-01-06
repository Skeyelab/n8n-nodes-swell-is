import { describe, it, expect } from 'vitest';
import { SwellIsApi } from './SwellIsApi.credentials';

describe('SwellIsApi Credentials', () => {
	it('should have correct name', () => {
		const credentials = new SwellIsApi();
		expect(credentials.name).toBe('swellIsApi');
	});

	it('should have correct display name', () => {
		const credentials = new SwellIsApi();
		expect(credentials.displayName).toBe('Swell API');
	});

	it('should have icon defined', () => {
		const credentials = new SwellIsApi();
		expect(credentials.icon).toBeDefined();
		expect(credentials.icon?.light).toBe('file:swellIs.svg');
		expect(credentials.icon?.dark).toBe('file:swellIs.dark.svg');
	});

	it('should have required properties', () => {
		const credentials = new SwellIsApi();
		expect(credentials.properties).toBeDefined();
		expect(credentials.properties.length).toBe(2);

		const storeIdProperty = credentials.properties.find((p) => p.name === 'storeId');
		expect(storeIdProperty).toBeDefined();
		expect(storeIdProperty?.required).toBe(true);

		const secretKeyProperty = credentials.properties.find((p) => p.name === 'secretKey');
		expect(secretKeyProperty).toBeDefined();
		expect(secretKeyProperty?.required).toBe(true);
		expect(secretKeyProperty?.typeOptions?.password).toBe(true);
	});

	it('should have authentication configured', () => {
		const credentials = new SwellIsApi();
		expect(credentials.authenticate).toBeDefined();
		expect(credentials.authenticate.type).toBe('generic');
		expect(credentials.authenticate.properties.auth).toBeDefined();
		expect(credentials.authenticate.properties.auth.username).toBe('={{$credentials.storeId}}');
		expect(credentials.authenticate.properties.auth.password).toBe('={{$credentials.secretKey}}');
	});

	it('should have test request configured', () => {
		const credentials = new SwellIsApi();
		expect(credentials.test).toBeDefined();
		expect(credentials.test.request.baseURL).toBe('https://api.swell.store');
		expect(credentials.test.request.url).toBe('/products');
		expect(credentials.test.request.method).toBe('GET');
	});
});

