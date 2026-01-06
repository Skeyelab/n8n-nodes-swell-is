"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCreateDescription = void 0;
const showOnlyForProductCreate = {
    operation: ['create'],
    resource: ['product'],
};
exports.productCreateDescription = [
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        displayOptions: {
            show: showOnlyForProductCreate,
        },
        required: true,
        default: '',
        description: 'Product name',
        routing: {
            send: {
                type: 'body',
                property: 'name',
            },
        },
    },
    {
        displayName: 'Slug',
        name: 'slug',
        type: 'string',
        displayOptions: {
            show: showOnlyForProductCreate,
        },
        default: '',
        description: 'URL-friendly product identifier',
        routing: {
            send: {
                type: 'body',
                property: 'slug',
            },
        },
    },
    {
        displayName: 'Price',
        name: 'price',
        type: 'number',
        displayOptions: {
            show: showOnlyForProductCreate,
        },
        default: 0,
        description: 'Product price',
        routing: {
            send: {
                type: 'body',
                property: 'price',
            },
        },
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        displayOptions: {
            show: showOnlyForProductCreate,
        },
        default: '',
        description: 'Product description',
        routing: {
            send: {
                type: 'body',
                property: 'description',
            },
        },
    },
    {
        displayName: 'Active',
        name: 'active',
        type: 'boolean',
        displayOptions: {
            show: showOnlyForProductCreate,
        },
        default: true,
        description: 'Whether the product is active',
        routing: {
            send: {
                type: 'body',
                property: 'active',
            },
        },
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        displayOptions: {
            show: showOnlyForProductCreate,
        },
        default: {},
        options: [
            {
                displayName: 'Categories',
                name: 'categories',
                type: 'string',
                default: '',
                description: 'Comma-separated list of category IDs',
                routing: {
                    send: {
                        type: 'body',
                        property: 'categories',
                        value: '={{ $value.split(",").map(id => id.trim()) }}',
                    },
                },
            },
            {
                displayName: 'Images',
                name: 'images',
                type: 'string',
                default: '',
                description: 'Comma-separated list of image URLs',
                routing: {
                    send: {
                        type: 'body',
                        property: 'images',
                        value: '={{ $value.split(",").map(url => ({ file: { url: url.trim() } })) }}',
                    },
                },
            },
            {
                displayName: 'Stock Level',
                name: 'stock_level',
                type: 'number',
                default: 0,
                description: 'Stock quantity',
                routing: {
                    send: {
                        type: 'body',
                        property: 'stock_level',
                    },
                },
            },
            {
                displayName: 'Stock Tracking',
                name: 'stock_tracking',
                type: 'boolean',
                default: false,
                description: 'Whether to track stock',
                routing: {
                    send: {
                        type: 'body',
                        property: 'stock_tracking',
                    },
                },
            },
        ],
    },
];
//# sourceMappingURL=create.js.map