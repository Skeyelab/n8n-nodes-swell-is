"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryDescription = void 0;
const get_1 = require("./get");
const getAll_1 = require("./getAll");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
const showOnlyForCategories = {
    resource: ['category'],
};
exports.categoryDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForCategories,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create a category',
                description: 'Create a new category',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/categories',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                action: 'Delete a category',
                description: 'Delete a category',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/categories/{{$parameter.categoryId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a category',
                description: 'Get a category by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/categories/{{$parameter.categoryId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many categories',
                description: 'Get many categories',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/categories',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a category',
                description: 'Update a category',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/categories/{{$parameter.categoryId}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.categoryGetDescription,
    ...getAll_1.categoryGetAllDescription,
    ...create_1.categoryCreateDescription,
    ...update_1.categoryUpdateDescription,
    ...delete_1.categoryDeleteDescription,
];
//# sourceMappingURL=index.js.map