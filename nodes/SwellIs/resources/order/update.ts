import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderUpdate = {
	operation: ['update'],
	resource: ['order'],
};

export const orderUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'string',
		displayOptions: {
			show: showOnlyForOrderUpdate,
		},
		required: true,
		default: '',
		description: 'The ID of the order to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: showOnlyForOrderUpdate,
		},
		default: {},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Abandoned', value: 'abandoned' },
					{ name: 'Canceled', value: 'canceled' },
					{ name: 'Completed', value: 'completed' },
					{ name: 'Pending', value: 'pending' },
					{ name: 'Processing', value: 'processing' },
				],
				default: 'abandoned',
				description: 'Order status',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
			{
				displayName: 'Tracking Number',
				name: 'tracking_number',
				type: 'string',
				default: '',
				description: 'Shipping tracking number',
				routing: {
					send: {
						type: 'body',
						property: 'tracking_number',
					},
				},
			},
			{
				displayName: 'Tracking Carrier',
				name: 'tracking_carrier',
				type: 'string',
				default: '',
				description: 'Shipping carrier name',
				routing: {
					send: {
						type: 'body',
						property: 'tracking_carrier',
					},
				},
			},
		],
	},
];

