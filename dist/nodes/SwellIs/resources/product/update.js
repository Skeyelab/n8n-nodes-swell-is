"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateDescription = void 0;
const showOnlyForProductUpdate = {
    operation: ['update'],
    resource: ['product'],
};
exports.productUpdateDescription = [
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'string',
        displayOptions: {
            show: showOnlyForProductUpdate,
        },
        required: true,
        default: '',
        description: 'The ID of the product to update',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        displayOptions: {
            show: showOnlyForProductUpdate,
        },
        default: {},
        options: [
            {
                displayName: 'Active',
                name: 'active',
                type: 'boolean',
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
                displayName: 'Description',
                name: 'description',
                type: 'string',
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
                displayName: 'Name',
                name: 'name',
                type: 'string',
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
                displayName: 'Price',
                name: 'price',
                type: 'number',
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
                displayName: 'Slug',
                name: 'slug',
                type: 'string',
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
//# sourceMappingURL=update.js.map