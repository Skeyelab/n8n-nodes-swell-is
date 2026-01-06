"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productGetAllDescription = void 0;
const showOnlyForProductGetAll = {
    operation: ['getAll'],
    resource: ['product'],
};
exports.productGetAllDescription = [
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: showOnlyForProductGetAll,
        },
        default: false,
        description: 'Whether to return all results or only up to a given limit',
        routing: {
            send: {
                paginate: '={{ $value }}',
            },
            operations: {
                pagination: {
                    type: 'offset',
                    properties: {
                        limitParameter: 'limit',
                        offsetParameter: 'offset',
                        pageSize: 100,
                        type: 'query',
                    },
                },
            },
        },
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                ...showOnlyForProductGetAll,
                returnAll: [false],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
        default: 50,
        routing: {
            send: {
                type: 'query',
                property: 'limit',
            },
            output: {
                maxResults: '={{$value}}',
            },
        },
        description: 'Max number of results to return',
    },
    {
        displayName: 'Search',
        name: 'search',
        type: 'string',
        displayOptions: {
            show: showOnlyForProductGetAll,
        },
        default: '',
        routing: {
            send: {
                type: 'query',
                property: 'search',
            },
        },
        description: 'Search query to filter products',
    },
    {
        displayName: 'Category',
        name: 'category',
        type: 'string',
        displayOptions: {
            show: showOnlyForProductGetAll,
        },
        default: '',
        routing: {
            send: {
                type: 'query',
                property: 'category',
            },
        },
        description: 'Filter by category slug',
    },
];
//# sourceMappingURL=getAll.js.map