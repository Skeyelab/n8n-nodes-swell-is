import type { INodeProperties } from 'n8n-workflow';
import { productGetDescription } from './get';
import { productGetAllDescription } from './getAll';
import { productCreateDescription } from './create';
import { productUpdateDescription } from './update';
import { productDeleteDescription } from './delete';

const showOnlyForProducts = {
	resource: ['product'],
};

export const productDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForProducts,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a product',
				description: 'Create a new product',
				routing: {
					request: {
						method: 'POST',
						url: '/products',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a product',
				description: 'Delete a product',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a product',
				description: 'Get a product by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many products',
				description: 'Get many products',
				routing: {
					request: {
						method: 'GET',
						url: '/products',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a product',
				description: 'Update a product',
				routing: {
					request: {
						method: 'PUT',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...productGetDescription,
	...productGetAllDescription,
	...productCreateDescription,
	...productUpdateDescription,
	...productDeleteDescription,
];

