# n8n-nodes-swell-is

This is an n8n community node for integrating with the [Swell Backend API](https://developers.swell.is/backend-api). It allows you to interact with Swell's e-commerce platform directly from your n8n workflows.

[Swell](https://swell.is/) is a headless commerce platform that provides a flexible API for managing products, orders, customers, and more.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Product
- **Create**: Create a new product
- **Get**: Get a product by ID
- **Get Many**: List all products with optional filtering
- **Update**: Update an existing product
- **Delete**: Delete a product

### Order
- **Create**: Create a new order
- **Get**: Get an order by ID
- **Get Many**: List all orders with optional status filtering
- **Update**: Update an existing order (status, tracking, etc.)

### Customer
- **Create**: Create a new customer account
- **Get**: Get a customer by ID
- **Get Many**: List all customers with optional email filtering
- **Update**: Update an existing customer

### Category
- **Create**: Create a new category
- **Get**: Get a category by ID
- **Get Many**: List all categories
- **Update**: Update an existing category
- **Delete**: Delete a category

## Credentials

To use this node, you need to authenticate with your Swell store using Basic Authentication.

### Prerequisites

1. You need a Swell store account
2. You need your **Store ID** and **Secret Key**

### Getting Your Credentials

1. Log in to your Swell dashboard
2. Navigate to **Settings** → **API**
3. Copy your **Store ID** and **Secret Key**

### Setting Up Credentials in n8n

1. When adding the Swell node to your workflow, click on **Credentials**
2. Select **Create New Credential**
3. Enter your:
   - **Store ID**: Your Swell store identifier
   - **Secret Key**: Your Swell secret key (this will be hidden for security)
4. Click **Save**

The credentials use Basic Authentication with your Store ID as the username and Secret Key as the password.

## Compatibility

- **Minimum n8n version**: 1.0.0
- **Tested with**: n8n 1.0.0+

## Usage

### Example: Create a Product

1. Add a **Swell** node to your workflow
2. Select **Product** as the resource
3. Select **Create** as the operation
4. Fill in the required fields:
   - **Name**: Product name
   - **Price**: Product price
5. Optionally add additional fields like description, images, stock levels, etc.
6. Execute the workflow

### Example: Get Orders by Status

1. Add a **Swell** node to your workflow
2. Select **Order** as the resource
3. Select **Get Many** as the operation
4. Optionally filter by status (pending, processing, completed, etc.)
5. Set pagination options (return all or limit results)
6. Execute the workflow

### Example: Create a Customer

1. Add a **Swell** node to your workflow
2. Select **Customer** as the resource
3. Select **Create** as the operation
4. Fill in the required fields:
   - **Email**: Customer email address
5. Optionally add name, phone, billing address, etc.
6. Execute the workflow

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Swell Backend API Documentation](https://developers.swell.is/backend-api)
- [Swell Node.js Library](https://github.com/swellstores/swell-node)
- [Swell Developer Portal](https://developers.swell.is/)

## Testing

This project uses [Vitest](https://vitest.dev/) for testing.

### Running Tests

```bash
# Run tests once
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with UI
yarn test:ui

# Run tests with coverage
yarn test:coverage
```

### Test Structure

Tests are located alongside the source files:
- `credentials/**/*.test.ts` - Credential tests
- `nodes/**/*.test.ts` - Node and resource tests

## Version history

### 0.1.0
- Initial release
- Support for Products, Orders, Customers, and Categories
- Basic CRUD operations for all resources
- Basic authentication with Store ID and Secret Key
- Vitest testing setup
