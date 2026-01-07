import type { INodeProperties } from 'n8n-workflow';
import { userCreateDescription } from './create';
import { userGetDescription } from './get';
import { userUpdateDescription } from './update';
import { userDeleteDescription } from './delete';

const showOnlyForUsers = {
	resource: ['user'],
};

export const userDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUsers,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new user',
				description: 'Create a new user',
				routing: {
					request: {
						method: 'POST',
						url: '/users',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a user',
				description: 'Delete a user',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter.userId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a user',
				description: 'Get the data of a single user',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter.userId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get users',
				description: 'Get many users',
				routing: {
					request: {
						method: 'GET',
						url: '/users',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a user',
				description: 'Update a user',
				routing: {
					request: {
						method: 'PUT',
						url: '=/users/{{$parameter.userId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...userGetDescription,
	...userCreateDescription,
	...userUpdateDescription,
	...userDeleteDescription,
];
