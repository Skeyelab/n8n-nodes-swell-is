import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerGetAll = {
	operation: ['getAll'],
	resource: ['customer'],
};

export const customerGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForCustomerGetAll,
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
				...showOnlyForCustomerGetAll,
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
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomerGetAll,
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'tags',
			},
		},
		description: 'Filter by customer tags (may be comma-separated)',
	},
	{
		displayName: 'Created From',
		name: 'created_from',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomerGetAll,
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'created_from',
			},
		},
		description: 'Filter customers created after this date (ISO 8601 or timestamp)',
	},
	{
		displayName: 'Created To',
		name: 'created_to',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomerGetAll,
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'created_to',
			},
		},
		description: 'Filter customers created before this date (ISO 8601 or timestamp)',
	},
	{
		displayName: 'Group',
		name: 'group',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomerGetAll,
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'group',
			},
		},
		description: 'Filter by customer group',
	},
];

