"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDescription = void 0;
const get_1 = require("./get");
const getAll_1 = require("./getAll");
const create_1 = require("./create");
const update_1 = require("./update");
const showOnlyForOrders = {
    resource: ['order'],
};
exports.orderDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForOrders,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create an order',
                description: 'Create a new order',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/orders',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get an order',
                description: 'Get an order by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/orders/{{$parameter.orderId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many orders',
                description: 'Get many orders',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/orders',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update an order',
                description: 'Update an order',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/orders/{{$parameter.orderId}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.orderGetDescription,
    ...getAll_1.orderGetAllDescription,
    ...create_1.orderCreateDescription,
    ...update_1.orderUpdateDescription,
];
//# sourceMappingURL=index.js.map