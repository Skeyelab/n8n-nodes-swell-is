"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUpdateDescription = void 0;
const showOnlyForCategoryUpdate = {
    operation: ['update'],
    resource: ['category'],
};
exports.categoryUpdateDescription = [
    {
        displayName: 'Category ID',
        name: 'categoryId',
        type: 'string',
        displayOptions: {
            show: showOnlyForCategoryUpdate,
        },
        required: true,
        default: '',
        description: 'The ID of the category to update',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        displayOptions: {
            show: showOnlyForCategoryUpdate,
        },
        default: {},
        options: [
            {
                displayName: 'Name',
                name: 'name',
                type: 'string',
                default: '',
                description: 'Category name',
                routing: {
                    send: {
                        type: 'body',
                        property: 'name',
                    },
                },
            },
            {
                displayName: 'Slug',
                name: 'slug',
                type: 'string',
                default: '',
                description: 'URL-friendly category identifier',
                routing: {
                    send: {
                        type: 'body',
                        property: 'slug',
                    },
                },
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
                description: 'Category description',
                routing: {
                    send: {
                        type: 'body',
                        property: 'description',
                    },
                },
            },
            {
                displayName: 'Active',
                name: 'active',
                type: 'boolean',
                default: true,
                description: 'Whether the category is active',
                routing: {
                    send: {
                        type: 'body',
                        property: 'active',
                    },
                },
            },
        ],
    },
];
//# sourceMappingURL=update.js.map