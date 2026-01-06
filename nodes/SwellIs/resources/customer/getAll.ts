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
				value: '={{ $parameter.returnAll === false ? $value : undefined }}',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				...showOnlyForCustomerGetAll,
				returnAll: [false],
			},
		},
		default: undefined,
		options: [
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Filter by customer tags (may be comma-separated)',
			},
			{
				displayName: 'Created From',
				name: 'created_from',
				type: 'string',
				default: '',
				description: 'Filter customers created after this date (ISO 8601 or timestamp)',
			},
			{
				displayName: 'Created To',
				name: 'created_to',
				type: 'string',
				default: '',
				description: 'Filter customers created before this date (ISO 8601 or timestamp)',
			},
			{
				displayName: 'Group',
				name: 'group',
				type: 'string',
				default: '',
				description: 'Filter by customer group',
			},
		],
		routing: {
			send: {
				type: 'query',
				property: 'where',
				value: '={{ $parameter.returnAll === true ? undefined : (() => { if ($parameter.returnAll === true) return undefined; const f = $value || {}; const w = {}; if (f.tags && f.tags.trim()) w.tags = f.tags; if (f.group && f.group.trim()) w.group = f.group; if (f.created_from || f.created_to) { w.date_created = {}; if (f.created_from) w.date_created.$gte = f.created_from; if (f.created_to) w.date_created.$lte = f.created_to; } return Object.keys(w).length > 0 ? w : undefined; })() }}',
			},
		},
	},
];

