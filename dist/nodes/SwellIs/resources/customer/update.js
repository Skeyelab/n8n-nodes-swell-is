"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerUpdateDescription = void 0;
const showOnlyForCustomerUpdate = {
    operation: ['update'],
    resource: ['customer'],
};
exports.customerUpdateDescription = [
    {
        displayName: 'Customer ID',
        name: 'customerId',
        type: 'string',
        displayOptions: {
            show: showOnlyForCustomerUpdate,
        },
        required: true,
        default: '',
        description: 'The ID of the customer to update',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        displayOptions: {
            show: showOnlyForCustomerUpdate,
        },
        default: {},
        options: [
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                placeholder: 'name@email.com',
                default: '',
                description: 'Customer email address',
                routing: {
                    send: {
                        type: 'body',
                        property: 'email',
                    },
                },
            },
            {
                displayName: 'First Name',
                name: 'first_name',
                type: 'string',
                default: '',
                description: 'Customer first name',
                routing: {
                    send: {
                        type: 'body',
                        property: 'first_name',
                    },
                },
            },
            {
                displayName: 'Last Name',
                name: 'last_name',
                type: 'string',
                default: '',
                description: 'Customer last name',
                routing: {
                    send: {
                        type: 'body',
                        property: 'last_name',
                    },
                },
            },
            {
                displayName: 'Phone',
                name: 'phone',
                type: 'string',
                default: '',
                description: 'Customer phone number',
                routing: {
                    send: {
                        type: 'body',
                        property: 'phone',
                    },
                },
            },
        ],
    },
];
//# sourceMappingURL=update.js.map