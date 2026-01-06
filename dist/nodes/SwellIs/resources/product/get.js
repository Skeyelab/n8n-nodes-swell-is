"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productGetDescription = void 0;
const showOnlyForProductGet = {
    operation: ['get'],
    resource: ['product'],
};
exports.productGetDescription = [
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'string',
        displayOptions: {
            show: showOnlyForProductGet,
        },
        required: true,
        default: '',
        description: 'The ID of the product to retrieve',
    },
];
//# sourceMappingURL=get.js.map