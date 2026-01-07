import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUserDelete = {
	operation: ['delete'],
	resource: ['user'],
};

export const userDeleteDescription: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		displayOptions: {
			show: showOnlyForUserDelete,
		},
		required: true,
		default: '',
		description: 'The ID of the user to delete',
	},
];

