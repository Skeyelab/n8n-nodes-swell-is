import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCategoryCreate = {
	operation: ['create'],
	resource: ['category'],
};

export const categoryCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForCategoryCreate,
		},
		required: true,
		default: '',
		description: 'Category name',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Slug',
		name: 'slug',
		type: 'string',
		displayOptions: {
			show: showOnlyForCategoryCreate,
		},
		default: '',
		description: 'URL-friendly category identifier',
		routing: {
			send: {
				type: 'body',
				property: 'slug',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: showOnlyForCategoryCreate,
		},
		default: '',
		description: 'Category description',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Active',
		name: 'active',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForCategoryCreate,
		},
		default: true,
		description: 'Whether the category is active',
		routing: {
			send: {
				type: 'body',
				property: 'active',
			},
		},
	},
	{
		displayName: 'Parent ID',
		name: 'parent_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForCategoryCreate,
		},
		default: '',
		description: 'Parent category ID (for nested categories)',
		routing: {
			send: {
				type: 'body',
				property: 'parent_id',
			},
		},
	},
];

