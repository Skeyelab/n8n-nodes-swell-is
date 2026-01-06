import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCategoryDelete = {
	operation: ['delete'],
	resource: ['category'],
};

export const categoryDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'string',
		displayOptions: {
			show: showOnlyForCategoryDelete,
		},
		required: true,
		default: '',
		description: 'The ID of the category to delete',
	},
];

