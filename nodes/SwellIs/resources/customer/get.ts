import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerGet = {
	operation: ['get'],
	resource: ['customer'],
};

export const customerGetDescription: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomerGet,
		},
		required: true,
		default: '',
		description: 'The ID of the customer to retrieve',
	},
];

