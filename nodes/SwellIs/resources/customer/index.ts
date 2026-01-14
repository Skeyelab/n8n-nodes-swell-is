import type { IDataObject, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { customerGetDescription } from './get';
import { customerGetAllDescription } from './getAll';
import { customerCreateDescription } from './create';
import { customerUpdateDescription } from './update';

const showOnlyForCustomers = {
	resource: ['customer'],
};

export const customerDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCustomers,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a customer',
				description: 'Create a new customer',
				routing: {
					request: {
						method: 'POST',
						url: '/accounts',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a customer',
				description: 'Get a customer by ID or email',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.lookupType === "id" ? `/accounts/${$parameter.customerId}` : "/accounts"}}',
					},
					output: {
						postReceive: [
							async function (items, response): Promise<INodeExecutionData[]> {
								const lookupType = this.getNodeParameter('lookupType') as string;

								if (lookupType === 'email') {
									// For email lookup, extract results array from paginated response
									const body = response.body as { results?: unknown[] } | unknown;
									if (body && typeof body === 'object' && 'results' in body) {
										const results = (body as { results?: unknown[] }).results;
										if (Array.isArray(results)) {
											return results.length > 0
												? [{ json: results[0] as IDataObject }]
												: [{ json: {} as IDataObject }];
										}
									}
									// Fallback if response structure is unexpected
									return [{ json: {} as IDataObject }];
								}

								// For ID lookup, ensure we return a proper object
								// Handle case where response might be an array or malformed
								if (items.length > 0 && items[0].json) {
									const json = items[0].json;
									// If json is an array with empty string, return empty object
									if (Array.isArray(json) && json.length === 1 && json[0] === '') {
										return [{ json: {} as IDataObject }];
									}
									// If json is an array, take first item
									if (Array.isArray(json) && json.length > 0) {
										return [{ json: json[0] as IDataObject }];
									}
									// Otherwise return as-is
									return items;
								}

								return items;
							},
						],
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many customers',
				description: 'Get many customers',
				routing: {
					request: {
						method: 'GET',
						url: '/accounts',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a customer',
				description: 'Update a customer',
				routing: {
					request: {
						method: 'PUT',
						url: '=/accounts/{{$parameter.customerId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...customerGetDescription,
	...customerGetAllDescription,
	...customerCreateDescription,
	...customerUpdateDescription,
];

