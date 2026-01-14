import type { IDataObject, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { orderGetDescription } from './get';
import { orderGetAllDescription } from './getAll';
import { orderCreateDescription } from './create';
import { orderUpdateDescription } from './update';

const showOnlyForOrders = {
	resource: ['order'],
};

export const orderDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForOrders,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create an order',
				description: 'Create a new order',
				routing: {
					request: {
						method: 'POST',
						url: '/orders',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an order',
				description: 'Get an order by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/orders/{{$parameter.orderId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many orders',
				description: 'Get many orders',
				routing: {
					request: {
						method: 'GET',
						url: '/orders',
					},
					output: {
						postReceive: [
							async function (items, response): Promise<INodeExecutionData[]> {
								const returnAll = this.getNodeParameter('returnAll', 0) as boolean;

								// When returnAll is true, let pagination system handle everything
								// Don't interfere with the rootProperty extraction
								if (returnAll) {
									return items;
								}

								// When returnAll is false, pagination might not extract results automatically
								// Check if items already contain extracted results
								if (items.length > 0) {
									// Check if first item looks like an order object (has id, number, etc.)
									const firstItem = items[0].json as IDataObject;
									if (firstItem && (firstItem.id || firstItem.number || firstItem.account_id)) {
										// Items are already extracted orders
										return items;
									}
								}

								// Manually extract the results array from the paginated response
								const body = response.body as { results?: unknown[] } | unknown;
								if (body && typeof body === 'object' && 'results' in body) {
									const results = (body as { results?: unknown[] }).results;
									if (Array.isArray(results)) {
										// Convert each result to an execution data item
										return results.map((result) => ({
											json: result as IDataObject,
										}));
									}
								}

								// Fallback: return items as-is or empty array
								return items.length > 0 ? items : [];
							},
						],
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an order',
				description: 'Update an order',
				routing: {
					request: {
						method: 'PUT',
						url: '=/orders/{{$parameter.orderId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...orderGetDescription,
	...orderGetAllDescription,
	...orderCreateDescription,
	...orderUpdateDescription,
];

