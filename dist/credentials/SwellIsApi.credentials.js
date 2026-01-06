"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwellIsApi = void 0;
class SwellIsApi {
    constructor() {
        this.name = 'swellIsApi';
        this.displayName = 'Swell API';
        this.documentationUrl = 'https://github.com/swellstores/swell-node#readme';
        this.properties = [
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
        this.authenticate = {
            type: 'generic',
            properties: {
                auth: {
                    username: '={{$credentials.storeId}}',
                    password: '={{$credentials.secretKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.swell.store',
                url: '/products',
                method: 'GET',
            },
        };
    }
}
exports.SwellIsApi = SwellIsApi;
//# sourceMappingURL=SwellIsApi.credentials.js.map