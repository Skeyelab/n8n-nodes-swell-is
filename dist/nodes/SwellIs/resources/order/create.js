"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCreateDescription = void 0;
const showOnlyForOrderCreate = {
    operation: ['create'],
    resource: ['order'],
};
exports.orderCreateDescription = [
    {
        displayName: 'Items',
        name: 'items',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
        required: true,
        default: {},
        description: 'Order items',
        options: [
            {
                displayName: 'Item',
                name: 'item',
                values: [
                    {
                        displayName: 'Product ID',
                        name: 'product_id',
                        type: 'string',
                        required: true,
                        default: '',
                    },
                    {
                        displayName: 'Quantity',
                        name: 'quantity',
                        type: 'number',
                        required: true,
                        default: 1,
                        description: 'Item quantity',
                    },
                    {
                        displayName: 'Price',
                        name: 'price',
                        type: 'number',
                        default: 0,
                        description: 'Item price (optional, defaults to product price)',
                    },
                ],
            },
        ],
        routing: {
            send: {
                type: 'body',
                property: 'items',
            },
        },
    },
    {
        displayName: 'Account ID',
        name: 'account_id',
        type: 'string',
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
        default: '',
        description: 'The account/customer ID',
        routing: {
            send: {
                type: 'body',
                property: 'account_id',
            },
        },
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
        default: {},
        options: [
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                placeholder: 'name@email.com',
                default: '',
                description: 'Customer email',
                routing: {
                    send: {
                        type: 'body',
                        property: 'email',
                    },
                },
            },
            {
                displayName: 'Currency',
                name: 'currency',
                type: 'string',
                default: 'USD',
                description: 'Order currency code',
                routing: {
                    send: {
                        type: 'body',
                        property: 'currency',
                    },
                },
            },
            {
                displayName: 'Shipping',
                name: 'shipping',
                type: 'fixedCollection',
                default: {},
                options: [
                    {
                        displayName: 'Shipping Address',
                        name: 'shipping',
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
                                displayName: 'Address 2',
                                name: 'address2',
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
                        property: 'shipping',
                    },
                },
            },
        ],
    },
];
//# sourceMappingURL=create.js.map