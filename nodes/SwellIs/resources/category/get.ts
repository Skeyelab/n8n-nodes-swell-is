import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCategoryGet = {
	operation: ['get'],
	resource: ['category'],
};

export const categoryGetDescription: INodeProperties[] = [
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'string',
		displayOptions: {
			show: showOnlyForCategoryGet,
		},
		required: true,
		default: '',
		description: 'The ID of the category to retrieve',
	},
];

