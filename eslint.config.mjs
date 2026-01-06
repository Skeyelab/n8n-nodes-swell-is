import { config } from '@n8n/node-cli/eslint';

export default [
	...config,
	{
		ignores: ['**/*.test.ts', '**/*.spec.ts', 'vitest.config.ts'],
	},
];
