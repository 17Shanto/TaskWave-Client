# TaskWave Application Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [API Endpoints](#api-endpoints)
   - [User](#user)
   - [Workspace](#workspace)
   - [List](#list)
   - [Task](#task)
4. [Authentication](#authentication)
5. [Error Handling](#error-handling)
6. [Running the Application](#running-the-application)

## 1. Introduction

TaskWave is a Node.js and MongoDB application designed to manage tasks within workspaces. This documentation will guide you through using the application's API to create, update, and manage workspaces, lists, tasks, and users.

## 2. Getting Started

### Prerequisites

- Node.js installed on your system.
- MongoDB connection string and database set up.

### Installation

1. Clone the TaskWave repository:
   ```bash
   git clone <repository-url>
   cd taskwave
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure MongoDB:
   - Replace `<password>` in the `mongoDBPassword` variable in `app.js` with your MongoDB password.
   - Update the `mongoDBURL` variable to match your MongoDB connection URL.

## 3. API Endpoints

The TaskWave application provides the following API endpoints for managing users, workspaces, lists, and tasks:

### User

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login an existing user.
- `POST /api/users/logout`: Logout the user (optional).

### Workspace

- `POST /api/workspaces`: Create a new workspace.
- `GET /api/workspaces`: Get all workspaces.
- `GET /api/workspaces/:id`: Get a single workspace by ID.
- `PUT /api/workspaces/:id`: Update a workspace by ID.
- `DELETE /api/workspaces/:id`: Delete a workspace by ID.
- `GET /api/workspaces/:id/lists`: Get tasks for a specific list by its ID.

### List

- `POST /api/lists`: Create a new list within a workspace.
- `GET /api/lists`: Get all lists within a workspace.
- `GET /api/lists/:id`: Get a single list by ID.
- `PUT /api/lists/:id`: Update a list by ID.
- `DELETE /api/lists/:id`: Delete a list by ID.

### Task

- `POST /api/tasks`: Create a new task within a list.
- `GET /api/tasks`: Get all tasks within a list.
- `GET /api/tasks/:id`: Get a single task by ID.
- `PUT /api/tasks/:id`: Update a task by ID.
- `DELETE /api/tasks/:id`: Delete a task by ID.

## 4. Authentication

To use the TaskWave API, you need to be authenticated. The API uses JSON Web Tokens (JWT) for authentication. After registering or logging in, a token is returned and should be included in the request headers as an "Authorization" token.

Example:
```
Authorization: Bearer your-jwt-token
```

## 5. Error Handling

The TaskWave application handles errors by providing clear error messages and status codes. When an error occurs, the API will respond with a JSON object containing an "error" field.

Example:
```json
{
  "error": "Internal Server Error"
}
```

## 6. Running the Application

To start the TaskWave application, use the following command:

```bash
npm start
```

The application will run on the specified port (default is 3000).

That's it! You now have a basic documentation template for your TaskWave application. You can expand on this by adding more details, examples, and explanations based on your application's specific functionality and requirements.
