"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwellIs = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const product_1 = require("./resources/product");
const order_1 = require("./resources/order");
const customer_1 = require("./resources/customer");
const category_1 = require("./resources/category");
class SwellIs {
    constructor() {
        this.description = {
            displayName: 'Swell',
            name: 'swellIs',
            icon: { light: 'file:swellIs.svg', dark: 'file:swellIs.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Swell Backend API',
            defaults: {
                name: 'Swell',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'swellIsApi', required: true }],
            requestDefaults: {
                baseURL: 'https://api.swell.store',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Product',
                            value: 'product',
                        },
                        {
                            name: 'Order',
                            value: 'order',
                        },
                        {
                            name: 'Customer',
                            value: 'customer',
                        },
                        {
                            name: 'Category',
                            value: 'category',
                        },
                    ],
                    default: 'product',
                },
                ...product_1.productDescription,
                ...order_1.orderDescription,
                ...customer_1.customerDescription,
                ...category_1.categoryDescription,
            ],
        };
    }
}
exports.SwellIs = SwellIs;
//# sourceMappingURL=SwellIs.node.js.map