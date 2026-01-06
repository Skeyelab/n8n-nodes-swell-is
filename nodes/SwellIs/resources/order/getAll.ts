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
	{
		displayName: 'Account ID',
		name: 'account_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'account_id',
			},
		},
		description: 'Filter orders by customer/account ID',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'email',
			},
		},
		description: 'Filter orders by customer email',
	},
	{
		displayName: 'Created From',
		name: 'created_from',
		type: 'string',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'created_from',
			},
		},
		description: 'Filter orders created after this date (ISO 8601 or timestamp)',
	},
	{
		displayName: 'Created To',
		name: 'created_to',
		type: 'string',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'created_to',
			},
		},
		description: 'Filter orders created before this date (ISO 8601 or timestamp)',
	},
	{
		displayName: 'Total Min',
		name: 'total_min',
		type: 'number',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		default: undefined,
		routing: {
			send: {
				type: 'query',
				property: 'total_min',
			},
		},
		description: 'Filter by minimum order total',
	},
	{
		displayName: 'Total Max',
		name: 'total_max',
		type: 'number',
		displayOptions: {
			show: showOnlyForOrderGetAll,
		},
		default: undefined,
		routing: {
			send: {
				type: 'query',
				property: 'total_max',
			},
		},
		description: 'Filter by maximum order total',
	},
];

