# E-commerce Platform

A modern, full-stack e-commerce platform built with React, Node.js, and MongoDB. The platform consists of three main components: a customer-facing frontend, an admin dashboard, and a backend API.

## Features

### Customer Frontend
- Modern, responsive design with glass-morphism effects
- User authentication (login/register) with social login options
- Product browsing and searching
- Shopping cart functionality
- Secure checkout process
- Order tracking
- User profile management

### Admin Dashboard
- Secure admin authentication
- Product management (CRUD operations)
- User management
- Order processing and tracking
- Inventory management
- Sales analytics (coming soon)

### Backend API
- RESTful API architecture
- JWT-based authentication
- Role-based access control
- Order processing
- Product and category management
- User management

## Tech Stack

### Frontend
- React
- Tailwind CSS
- React Router
- React Icons
- Glass-morphism design

### Admin Dashboard
- React Admin
- Material-UI
- Data provider for REST APIs
- Custom authentication provider

### Backend
- Node.js
- Express.js
- MongoDB
- JWT authentication
- REST API

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecommerce-platform.git
cd ecommerce-platform
```

2. Install dependencies for all components:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install admin panel dependencies
cd ../admin
npm install
```

3. Set up environment variables:
Create `.env` files in both backend and frontend directories:

Backend `.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm run dev

# Start admin panel (from admin directory)
npm run dev
```

The applications will be available at:
- Frontend: http://localhost:5173
- Admin Panel: http://localhost:5174
- Backend API: http://localhost:5000

## Project Structure

```
ecommerce-platform/
├── frontend/              # Customer-facing frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/       # Page components
│   │   └── assets/      # Static assets
│   └── ...
├── admin/                # Admin dashboard
│   ├── src/
│   │   ├── components/   # Admin components
│   │   ├── resources/   # Resource configurations
│   │   └── providers/   # Data and auth providers
│   └── ...
└── backend/             # Backend API
    ├── src/
    │   ├── routes/     # API routes
    │   ├── models/     # Database models
    │   ├── controllers/# Route controllers
    │   └── middleware/ # Custom middleware
    └── ...
```

## Key Features Implementation

### Authentication
- JWT-based authentication
- Social login integration
- Secure password hashing
- Role-based access control

### Shopping Cart
- Real-time cart updates
- Persistent cart storage
- Product quantity management
- Price calculations

### Checkout Process
- Multi-step checkout
- Address management
- Order summary
- Payment integration (coming soon)

### Admin Features
- Dashboard analytics
- Order management
- Product catalog management
- User management
- Inventory tracking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Admin for the admin dashboard framework
- Tailwind CSS for the styling system
- Material-UI for admin components
- All other open-source contributors

## Support

For support, email support@yourdomain.com or create an issue in the repository. 