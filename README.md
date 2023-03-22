<!-- @format -->

# Simple REST API using Node, Express, and Postman

This repository contains a simple RESTful API built using Node.js and Express.js. The API allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of items.

### Installation

To use this API, you'll need to have Node.js and npm installed on your machine.

1. Clone the repository using git clone
2. Navigate to the project directory
3. Install the required dependencies using `npm install`

### Usage

To start the server, run `npm start` or `node index.js` from the project directory.

Once the server is running, you can use [Postman](https://www.postman.com/downloads/) to test the API endpoints. The following endpoints are available:

-   GET /users - Get all users
-   GET /users/:id - Get user by ID
-   POST /users - Create a new user
-   PATCH /users/:id - Update a user by ID
-   DELETE /users/:id - Delete a user by ID

All requests and responses are in JSON format.
