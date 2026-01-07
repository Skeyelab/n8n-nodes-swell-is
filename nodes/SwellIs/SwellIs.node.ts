import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { productDescription } from './resources/product';
import { orderDescription } from './resources/order';
import { customerDescription } from './resources/customer';
import { categoryDescription } from './resources/category';
import { userDescription } from './resources/user';

export class SwellIs implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Swell',
		name: 'swellIs',
		icon: { light: 'file:swellIs.svg', dark: 'file:swellIs.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Swell Backend API',
		defaults: {
			name: 'Swell',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'swellIsApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.swell.store',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Category',
						value: 'category',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Order',
						value: 'order',
					},
					{
						name: 'Product',
						value: 'product',
					},
					{
						name: 'User',
						value: 'user',
					},
				],
				default: 'product',
			},
			...productDescription,
			...orderDescription,
			...customerDescription,
			...categoryDescription,
			...userDescription,
		],
	};
}
