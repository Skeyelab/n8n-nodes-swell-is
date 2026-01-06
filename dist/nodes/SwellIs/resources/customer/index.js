"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerDescription = void 0;
const get_1 = require("./get");
const getAll_1 = require("./getAll");
const create_1 = require("./create");
const update_1 = require("./update");
const showOnlyForCustomers = {
    resource: ['customer'],
};
exports.customerDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForCustomers,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create a customer',
                description: 'Create a new customer',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/accounts',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a customer',
                description: 'Get a customer by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/accounts/{{$parameter.customerId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many customers',
                description: 'Get many customers',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/accounts',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a customer',
                description: 'Update a customer',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/accounts/{{$parameter.customerId}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.customerGetDescription,
    ...getAll_1.customerGetAllDescription,
    ...create_1.customerCreateDescription,
    ...update_1.customerUpdateDescription,
];
//# sourceMappingURL=index.js.map