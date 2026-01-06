import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderGet = {
	operation: ['get'],
	resource: ['order'],
};

export const orderGetDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'string',
		displayOptions: {
			show: showOnlyForOrderGet,
		},
		required: true,
		default: '',
		description: 'The ID of the order to retrieve',
	},
];

