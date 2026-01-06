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
				value: '={{ $parameter.returnAll === false ? $value : undefined }}',
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
			show: {
				...showOnlyForOrderGetAll,
				returnAll: [false],
			},
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
				value: '={{ $parameter.returnAll ? undefined : $value }}',
			},
		},
		description: 'Filter by order status',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				...showOnlyForOrderGetAll,
				returnAll: [false],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Account ID',
				name: 'account_id',
				type: 'string',
				default: '',
				description: 'Filter orders by customer/account ID',
			},
			{
				displayName: 'Created From',
				name: 'created_from',
				type: 'string',
				default: '',
				description: 'Filter orders created after this date (ISO 8601 or timestamp)',
			},
			{
				displayName: 'Created To',
				name: 'created_to',
				type: 'string',
				default: '',
				description: 'Filter orders created before this date (ISO 8601 or timestamp)',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Filter orders by customer email',
			},
			{
				displayName: 'Total Max',
				name: 'total_max',
				type: 'number',
				default: undefined,
				description: 'Filter by maximum order total',
			},
			{
				displayName: 'Total Min',
				name: 'total_min',
				type: 'number',
				default: undefined,
				description: 'Filter by minimum order total',
			},
		],
		routing: {
			send: {
				type: 'query',
				property: 'where',
				value: '={{ $parameter.returnAll === false ? (() => { const f = $value || {}; const w = {}; if (f.account_id) w.account_id = f.account_id; if (f.email) w.account_email = f.email; if (f.created_from || f.created_to) { w.date_created = {}; if (f.created_from) w.date_created.$gte = f.created_from; if (f.created_to) w.date_created.$lte = f.created_to; } if (f.total_min || f.total_max) { w.grand_total = {}; if (f.total_min) w.grand_total.$gte = f.total_min; if (f.total_max) w.grand_total.$lte = f.total_max; } return Object.keys(w).length > 0 ? w : undefined; })() : undefined }}',
			},
		},
	},
];

