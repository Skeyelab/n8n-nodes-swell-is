import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class SwellIsApi implements ICredentialType {
	name = 'swellIsApi';

	displayName = 'Swell API';

	icon: Icon = {
		light: 'file:swellIs.svg',
		dark: 'file:swellIs.dark.svg',
	};

	// Link to your community node's README
	documentationUrl = 'https://github.com/swellstores/swell-node#readme';

	properties: INodeProperties[] = [
		{
			displayName: 'Store ID',
			name: 'storeId',
			type: 'string',
			required: true,
			default: '',
			description: 'Your Swell store ID',
		},
		{
			displayName: 'Secret Key',
			name: 'secretKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'Your Swell secret key',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{$credentials.storeId}}',
				password: '={{$credentials.secretKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.swell.store',
			url: '/products',
			method: 'GET',
		},
	};
}
