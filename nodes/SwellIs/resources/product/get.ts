import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProductGet = {
	operation: ['get'],
	resource: ['product'],
};

export const productGetDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		displayOptions: {
			show: showOnlyForProductGet,
		},
		required: true,
		default: '',
		description: 'The ID of the product to retrieve',
	},
];

