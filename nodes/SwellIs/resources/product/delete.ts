import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProductDelete = {
	operation: ['delete'],
	resource: ['product'],
};

export const productDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		displayOptions: {
			show: showOnlyForProductDelete,
		},
		required: true,
		default: '',
		description: 'The ID of the product to delete',
	},
];

