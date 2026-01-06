"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderGetDescription = void 0;
const showOnlyForOrderGet = {
    operation: ['get'],
    resource: ['order'],
};
exports.orderGetDescription = [
    {
        displayName: 'Order ID',
        name: 'orderId',
        type: 'string',
        displayOptions: {
            show: showOnlyForOrderGet,
        },
        required: true,
        default: '',
        description: 'The ID of the order to retrieve',
    },
];
//# sourceMappingURL=get.js.map