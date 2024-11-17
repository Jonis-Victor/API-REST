# API REST

This is a REST API built with **Node.js**, **TypeScript**, **Express**, and **MongoDB**. It provides CRUD operations for managing **Users** and **Posts** (social media posts). The application supports user authentication and allows users to create, read, update, and delete posts.

## Features

- **User Management (CRUD)**:
  - Create, read, update, and delete user profiles.
  - Store user details like name, email, password, telephone, and admin status.

- **Post Management (CRUD)**:
  - Create, read, update, and delete posts.
  - Each post includes a title, description, author, and publish status.

- **Database**: MongoDB (connected via Mongoose).
- **Security**: Uses environment variables for sensitive data (like database credentials) stored in a `.env` file.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express**: Framework for building web applications and APIs.
- **TypeScript**: Superset of JavaScript that adds static types.
- **MongoDB**: NoSQL database to store user and post data.
- **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
- **Joi**: Validation library to validate incoming data for users and posts.
- **dotenv**: To manage environment variables securely.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social-media-api.git
   ```
2. Navigate to the project folder:
   ```bash
    cd social-media-api
   ```
3. Install the dependencies:
 ```bash
  npm install
 ```
4. Create a .env file in the root directory and add the following variables:
 ```bash
  MONGO_DB_USERNAME=your_mongo_username
  MONGO_DB_PASSWORD=your_mongo_password
  MONGO_DB_DATABASE_NAME=ecommerce
   ```
5. Run the application:
 ```bash
    npm install
   ```
The server will run on port 3030 (or any port defined in the environment).

##API Endpoints

### Users
- **POST** `/api/v1/users` - Create a new user
- **GET** `/api/v1/users` - Get a list of all users
- **GET** `/api/v1/users/:id` - Get a specific user by ID
- **PUT** `/api/v1/users/:id` - Update a specific user's data
- **DELETE** `/api/v1/users/:id` - Delete a specific user

### Posts
- **POST** `/api/v1/posts` - Create a new post
- **GET** `/api/v1/posts` - Get a list of all posts
- **GET** `/api/v1/posts/:id` - Get a specific post by ID
- **PUT** `/api/v1/posts/:id` - Update a specific post
- **DELETE** `/api/v1/posts/:id` - Delete a specific post

## Example Request

### Create a new user:
**POST** `/api/v1/users`

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123",
  "telephone": 1234567890,
  "admin": false
}
```
### Create a new post:
**POST** `/api/v1/posts`

```json
{
  "title": "My First Post",
  "description": "This is a description of my first post.",
  "author": "John Doe",
  "published": true
}
```
### Environment Variables

The following environment variables are used in the project:

- **MONGO_DB_USERNAME**: Your MongoDB username.
- **MONGO_DB_PASSWORD**: Your MongoDB password.
- **MONGO_DB_DATABASE_NAME**: The name of your MongoDB database (e.g., ecommerce).

### Testing with Postman

1. Set the request type to **POST**, **GET**, **PUT**, or **DELETE** as needed.
2. Set the API endpoint, e.g., `http://localhost:3030/api/v1/users` or `http://localhost:3030/api/v1/posts`.
3. Add request body (JSON format) for **POST** and **PUT** requests.
4. Test the API by sending requests and inspecting the responses.

### Conclusion

This API allows for simple CRUD operations for managing users and posts in a social media platform. It is designed to be easily extendable, secure, and scalable using MongoDB and Node.js technologies.

