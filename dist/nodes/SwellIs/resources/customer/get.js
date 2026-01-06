"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerGetDescription = void 0;
const showOnlyForCustomerGet = {
    operation: ['get'],
    resource: ['customer'],
};
exports.customerGetDescription = [
    {
        displayName: 'Customer ID',
        name: 'customerId',
        type: 'string',
        displayOptions: {
            show: showOnlyForCustomerGet,
        },
        required: true,
        default: '',
        description: 'The ID of the customer to retrieve',
    },
];
//# sourceMappingURL=get.js.map