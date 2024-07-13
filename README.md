<!-- ## Live URL: https://fitness-tools-mu.vercel.app/ -->

# Fitness Tolls

### Live URL: https://fitness-tools-mu.vercel.app

## Project Overview

Fitness Tolls is an e-commerce platform dedicated to selling fitness equipment and accessories. The site provides a user-friendly interface to browse, search, and purchase a variety of fitness products.

## Features

- **Product Listings**: Browse through a wide range of fitness products.
- **Search and Filter**: Easily search for products and filter results by categories, price, and more.
- **Product Details**: View detailed information about each product.
- **Cart and Checkout**: Add products to the cart and proceed to checkout.

## Technology Stack

- **Frontend**:
  - React
  - TypeScript
  - Formik for form handling
  - Redux Toolkit for state management
  - Shadcn for styling
- **Deployment**:
  - Vercel for frontend deployment

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/shiningsudipto/fitness-tools-client.git
   cd fitness-tolls
   ```

2. **Install dependencies**:
   ```
   npm install
   # or
   yarn install
   ```

### Running the Application

1. **Start the development server**:

   ```
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:3000`.

## Usage

1. **Browsing Products**:

   - Navigate to the products page to see all available products.
   - Use the search bar and filters to find specific products.

2. **Adding to Cart**:

   - Click on a product to view details.
   - Add the product to your cart.

3. **Checkout**:

   - Go to your cart and proceed to checkout.
   - Fill in your details and choose a payment method.

4. **Product Management**:
   > Product List Table

- Displays products in a table format with columns for product name, price, category, and actions.
- **Action Buttons**: Each product row includes buttons for updating and deleting the product.

  > Updating a Product

- Allows modifying existing details. The fields are prefilled with existing data.
- Real-time reflection of updates, implementing an optimistic UI update.

  > Deleting a Product

- Prompts for confirmation before deletion.
- Real-time removal of the product from the UI after deletion.

  > Adding a Product

- Button to create a new product, opening a form with fields for name, price, description, images (supports ImgBB for image upload or direct link entry), category, and stock.
- Real-time addition of the new product to the product list after creation.

## Contact

For any inquiries or issues, please contact:

- **Sudipta Das**
- **Email**: shiningsudipto@gmail.com
- **GitHub**: [shiningsudipto](https://github.com/shiningsudipto)
