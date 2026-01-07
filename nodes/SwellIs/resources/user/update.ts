import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUserUpdate = {
	operation: ['update'],
	resource: ['user'],
};

export const userUpdateDescription: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		displayOptions: {
			show: showOnlyForUserUpdate,
		},
		required: true,
		default: '',
		description: 'The ID of the user to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: showOnlyForUserUpdate,
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the user',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
		],
	},
];

