import { config } from '@n8n/node-cli/eslint';

export default [
	...config,
	{
		ignores: [
			'**/*.test.ts',
			'**/*.spec.ts',
			'vitest.config.ts',
			'n8n-code-node-example.js',
			'n8n-simple-check.js',
			'order-fulfillment-check.js',
			'order-fulfillment-check.test.js',
		],
	},
];
