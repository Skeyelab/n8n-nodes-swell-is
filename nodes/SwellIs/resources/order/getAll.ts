import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderGetAll = {
	operation: ['getAll'],
	resource: ['order'],
};

export const orderGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
			},
			operations: {
				pagination: {
					type: 'offset',
					properties: {
						limitParameter: 'limit',
						offsetParameter: 'page',
						pageSize: 100,
						rootProperty: 'results',
						type: 'query',
					},
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForOrderGetAll,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		routing: {
			send: {
				type: 'query',
				property: 'limit',
				value: '={{ $parameter.returnAll === false ? $value : undefined }}',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		default: '',
		required: false,
		description: 'Filter orders by customer/account ID. Leave empty to get all orders.',
		routing: {
			send: {
				type: 'query',
				property: 'where',
				value: '={{ $value && $value.trim() ? { account_id: $value.trim() } : undefined }}',
			},
		},
	},
];

