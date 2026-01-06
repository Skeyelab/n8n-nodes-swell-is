"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryDeleteDescription = void 0;
const showOnlyForCategoryDelete = {
    operation: ['delete'],
    resource: ['category'],
};
exports.categoryDeleteDescription = [
    {
        displayName: 'Category ID',
        name: 'categoryId',
        type: 'string',
        displayOptions: {
            show: showOnlyForCategoryDelete,
        },
        required: true,
        default: '',
        description: 'The ID of the category to delete',
    },
];
//# sourceMappingURL=delete.js.map