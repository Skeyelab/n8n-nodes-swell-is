"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDeleteDescription = void 0;
const showOnlyForProductDelete = {
    operation: ['delete'],
    resource: ['product'],
};
exports.productDeleteDescription = [
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'string',
        displayOptions: {
            show: showOnlyForProductDelete,
        },
        required: true,
        default: '',
        description: 'The ID of the product to delete',
    },
];
//# sourceMappingURL=delete.js.map