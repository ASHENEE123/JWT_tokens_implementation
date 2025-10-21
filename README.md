
# JWT Authentication Implementation

This project demonstrates JWT (JSON Web Token) authentication using Node.js, Express.js, Bcrypt for password hashing, and EJS for templating. It provides a simple user login and registration system with token-based authentication.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing with Postman](#testing-with-postman)
- [Icons](#icons)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- Bcrypt
- JSON Web Tokens (JWT)
- URL Encoding
- EJS (Embedded JavaScript Templates)

## Features

- User Registration
- User Login
- Password Hashing with Bcrypt
- Token Generation and Authentication
- Protected Routes
- Simple Frontend using EJS

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/jwt-authentication.git
    ```

2. Navigate to the project directory:
    ```bash
    cd jwt-authentication
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    PORT=3000
    JWT_SECRET=your_jwt_secret
    ```

5. Start the application:
    ```bash
    npm start
    ```

Your application should now be running on `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. You will see the login and registration forms.
3. Register a new user via the registration form or by navigating to:
    ```
    http://localhost:3000/register
    ```
4. Log in using the login form or by navigating to:
    ```
    http://localhost:3000/login
    ```

### API Endpoints

- **GET /register**: Register a new user (URL encoding supported)
- **GET /login**: Log in to get a JWT (URL encoding supported)
- **GET /dashboard**: Access protected route (requires valid JWT)

## Testing with Postman

1. To access protected routes, you need to first obtain a JWT:
2. from login route
3. After receiving the JWT token in the response, you can test protected routes:
   - For example, to access `http://localhost:3000/dashboard`, create a GET request in Postman and include the token in the Authorization header:
    ```plaintext
    Authorization: Bearer <your_jwt_token>
    ```



