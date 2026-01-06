import type { INodeProperties } from 'n8n-workflow';
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

