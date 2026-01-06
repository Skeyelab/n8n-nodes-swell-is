import type { INodeProperties } from 'n8n-workflow';
import { categoryGetDescription } from './get';
import { categoryGetAllDescription } from './getAll';
import { categoryCreateDescription } from './create';
import { categoryUpdateDescription } from './update';
import { categoryDeleteDescription } from './delete';

const showOnlyForCategories = {
	resource: ['category'],
};

export const categoryDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCategories,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a category',
				description: 'Create a new category',
				routing: {
					request: {
						method: 'POST',
						url: '/categories',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a category',
				description: 'Delete a category',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/categories/{{$parameter.categoryId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a category',
				description: 'Get a category by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/categories/{{$parameter.categoryId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many categories',
				description: 'Get many categories',
				routing: {
					request: {
						method: 'GET',
						url: '/categories',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a category',
				description: 'Update a category',
				routing: {
					request: {
						method: 'PUT',
						url: '=/categories/{{$parameter.categoryId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...categoryGetDescription,
	...categoryGetAllDescription,
	...categoryCreateDescription,
	...categoryUpdateDescription,
	...categoryDeleteDescription,
];

