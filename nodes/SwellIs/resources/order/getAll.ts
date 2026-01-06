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
						offsetParameter: 'offset',
						pageSize: 100,
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
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		options: [
			{ name: 'Abandoned', value: 'abandoned' },
			{ name: 'Canceled', value: 'canceled' },
			{ name: 'Completed', value: 'completed' },
			{ name: 'Pending', value: 'pending' },
			{ name: 'Processing', value: 'processing' },
		],
		default: 'abandoned',
		routing: {
			send: {
				type: 'query',
				property: 'status',
			},
		},
		description: 'Filter by order status',
	},
];

