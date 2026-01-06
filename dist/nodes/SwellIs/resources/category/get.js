"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryGetDescription = void 0;
const showOnlyForCategoryGet = {
    operation: ['get'],
    resource: ['category'],
};
exports.categoryGetDescription = [
    {
        displayName: 'Category ID',
        name: 'categoryId',
        type: 'string',
        displayOptions: {
            show: showOnlyForCategoryGet,
        },
        required: true,
        default: '',
        description: 'The ID of the category to retrieve',
    },
];
//# sourceMappingURL=get.js.map