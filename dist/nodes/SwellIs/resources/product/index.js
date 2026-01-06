"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDescription = void 0;
const get_1 = require("./get");
const getAll_1 = require("./getAll");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
const showOnlyForProducts = {
    resource: ['product'],
};
exports.productDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForProducts,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create a product',
                description: 'Create a new product',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/products',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                action: 'Delete a product',
                description: 'Delete a product',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/products/{{$parameter.productId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a product',
                description: 'Get a product by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/products/{{$parameter.productId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many products',
                description: 'Get many products',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/products',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a product',
                description: 'Update a product',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/products/{{$parameter.productId}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.productGetDescription,
    ...getAll_1.productGetAllDescription,
    ...create_1.productCreateDescription,
    ...update_1.productUpdateDescription,
    ...delete_1.productDeleteDescription,
];
//# sourceMappingURL=index.js.map