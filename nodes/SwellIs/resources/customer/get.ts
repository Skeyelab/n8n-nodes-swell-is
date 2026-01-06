import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerGet = {
	operation: ['get'],
	resource: ['customer'],
};

export const customerGetDescription: INodeProperties[] = [
	{
		displayName: 'Lookup Type',
		name: 'lookupType',
		type: 'options',
		displayOptions: {
			show: showOnlyForCustomerGet,
		},
		options: [
			{
				name: 'ID',
				value: 'id',
			},
			{
				name: 'Email',
				value: 'email',
			},
		],
		default: 'id',
		description: 'How to lookup the customer',
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForCustomerGet,
				lookupType: ['id'],
			},
		},
		required: true,
		default: '',
		description: 'The ID of the customer to retrieve',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: {
			show: {
				...showOnlyForCustomerGet,
				lookupType: ['email'],
			},
		},
		required: true,
		default: '',
		description: 'The email address of the customer to retrieve',
		routing: {
			send: {
				type: 'query',
				property: 'email',
			},
		},
	},
];

