import type { INodeProperties } from 'n8n-workflow';
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

