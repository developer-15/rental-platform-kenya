# Rental Platform Kenya

## Overview
This is a comprehensive documentation for the Rental Platform Kenya application. The application is designed to facilitate rental processes in Kenya, providing a seamless experience for users to search, apply, and manage rental properties.

## Backend
The backend is developed using a RESTful API architecture. It is built with Node.js and Express.js frameworks to manage requests and responses. The database is integrated using MongoDB, and JSON Web Tokens (JWT) are used for authentication.

### Features:
- User authentication and authorization
- CRUD operations for rental properties
- Endpoint for searching properties
- Payment integration setup

### Setup Instructions:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/developer-15/rental-platform-kenya.git
   ```
2. **Navigate to the backend folder**:
   ```bash
   cd rental-platform-kenya/backend
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables** by creating a `.env` file and configuring the required variables.
5. **Start the server**:
   ```bash
   npm start
   ```

## Frontend
The frontend of the application is built using React.js. It provides an interactive interface for users to browse rental properties and interact with the backend services.

### Features:
- Responsive design
- Search bar for filtering properties
- User account management
- Booking and payment functionalities

### Setup Instructions:
1. **Navigate to the frontend folder**:
   ```bash
   cd frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the application**:
   ```bash
   npm start
   ```

## Database
The database for the Rental Platform is managed using MongoDB. A local instance can be set up, or a cloud instance may be used.

### Database Setup:
1. **Download and install MongoDB** from the official website.
2. **Start the MongoDB server**:
   ```bash
   mongod
   ```
3. **Setup the database connection** in the backend `.env` file.

## Deployment
For deployment, you can use services like Heroku or AWS.
### Steps for Heroku:
1. **Install the Heroku CLI** and log in.
2. **Create a new Heroku app**:
   ```bash
   heroku create rental-platform-kenya
   ```
3. **Deploy the application**:
   ```bash
   git push heroku main
   ```

## Conclusion
This documentation provides a clear understanding of the Rental Platform Kenya application. Follow the setup instructions for both frontend and backend to get the application running smoothly.