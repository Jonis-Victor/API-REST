# Social Media API

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

