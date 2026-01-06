import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerCreate = {
	operation: ['create'],
	resource: ['customer'],
};

export const customerCreateDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: {
			show: showOnlyForCustomerCreate,
		},
		required: true,
		default: '',
		description: 'Customer email address',
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomerCreate,
		},
		default: '',
		description: 'Customer first name',
		routing: {
			send: {
				type: 'body',
				property: 'first_name',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomerCreate,
		},
		default: '',
		description: 'Customer last name',
		routing: {
			send: {
				type: 'body',
				property: 'last_name',
			},
		},
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: showOnlyForCustomerCreate,
		},
		default: '',
		description: 'Customer password (optional)',
		routing: {
			send: {
				type: 'body',
				property: 'password',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: showOnlyForCustomerCreate,
		},
		default: {},
		options: [
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Customer phone number',
				routing: {
					send: {
						type: 'body',
						property: 'phone',
					},
				},
			},
			{
				displayName: 'Billing Address',
				name: 'billing',
				type: 'fixedCollection',
				default: {},
				options: [
					{
						displayName: 'Billing Address',
						name: 'billing',
						values: [
							{
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address 1',
								name: 'address1',
								type: 'string',
								default: '',
							},
							{
								displayName: 'City',
								name: 'city',
								type: 'string',
								default: '',
							},
							{
								displayName: 'State',
								name: 'state',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Zip',
								name: 'zip',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Country',
								name: 'country',
								type: 'string',
								default: '',
							},
						],
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'billing',
					},
				},
			},
		],
	},
];

