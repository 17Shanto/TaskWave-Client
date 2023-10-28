
# TaskWave

TaskWave is a web application for managing tasks, workspaces, and lists. This README provides an overview of how to use the application and its API. You can interact with the API to create and manage workspaces, lists, tasks, and user accounts.

## Table of Contents
1. [Getting Started](#getting-started)
2. [User Authentication](#user-authentication)
3. [Workspaces](#workspaces)
4. [Lists](#lists)
5. [Tasks](#tasks)

## Getting Started
To use the TaskWave API, you need to make HTTP requests to the provided endpoints. Below is the base URL for the API:

```
Base URL: http://your-server-url.com/api
```

### Authentication
Some routes require authentication. You should include a valid JSON Web Token (JWT) in the "Authorization" header of your requests to authenticate.

Example:
```
Authorization: Bearer your-jwt-token
```

## User Authentication

### Register a User
- **Route:** POST `/users/register`
- **Description:** Register a new user.
- **Request Body Example:**
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "your-password"
}
```

### Login User
- **Route:** POST `/users/login`
- **Description:** Log in an existing user.
- **Request Body Example:**
```json
{
  "email": "johndoe@example.com",
  "password": "your-password"
}
```

### Logout User
- **Route:** POST `/users/logout`
- **Description:** Log out the currently authenticated user.

## Workspaces

### Create a Workspace
- **Route:** POST `/workspaces`
- **Description:** Create a new workspace.
- **Request Body Example:**
```json
{
  "name": "Project Workspace",
  "description": "This is a workspace for a project.",
  "createdBy": "user-id-here"
}
```

### Get All Workspaces
- **Route:** GET `/workspaces`
- **Description:** Get a list of all workspaces.

### Get Workspace by ID
- **Route:** GET `/workspaces/:id`
- **Description:** Get details of a specific workspace by its ID.

### Update Workspace by ID
- **Route:** PUT `/workspaces/:id`
- **Description:** Update an existing workspace by its ID.
- **Request Body Example:**
```json
{
  "name": "New Workspace Name",
  "description": "Updated description."
}
```

### Delete Workspace by ID
- **Route:** DELETE `/workspaces/:id`
- **Description:** Delete a workspace by its ID.

### Get Lists and Tasks for a Workspace
- **Route:** GET `/workspaces/:id/lists`
- **Description:** Get all lists within a specific workspace, including their tasks.

## Lists

### Create a List
- **Route:** POST `/lists`
- **Description:** Create a new list within a workspace.
- **Request Body Example:**
```json
{
  "title": "To-Do List",
  "workspace": "workspace-id-here"
}
```

### Get All Lists in a Workspace
- **Route:** GET `/lists`
- **Description:** Get all lists within a specific workspace.

### Get List by ID
- **Route:** GET `/lists/:id`
- **Description:** Get details of a specific list by its ID.

### Update List by ID
- **Route:** PUT `/lists/:id`
- **Description:** Update an existing list by its ID.
- **Request Body Example:**
```json
{
  "title": "Updated List Title"
}
```

### Delete List by ID
- **Route:** DELETE `/lists/:id`
- **Description:** Delete a list by its ID.

## Tasks

### Create a Task
- **Route:** POST `/tasks`
- **Description:** Create a new task within a list.
- **Request Body Example:**
```json
{
  "title": "Task 1",
  "description": "Description of Task 1",
  "list": "list-id-here"
}
```

### Get All Tasks in a List
- **Route:** GET `/tasks`
- **Description:** Get all tasks within a specific list.

### Get Task by ID
- **Route:** GET `/tasks/:id`
- **Description:** Get details of a specific task by its ID.

### Update Task by ID
- **Route:** PUT `/tasks/:id`
- **Description:** Update an existing task by its ID.
- **Request Body Example:**
```json
{
  "title": "Updated Task Title",
  "description": "Updated task description",
  "list": "list-id-here",
  "priority": "High",
  "completed": true
}
```

### Delete Task by ID
- **Route:** DELETE `/tasks/:id`
- **Description:** Delete a task by its ID.

---

This documentation provides a comprehensive guide on how to use the TaskWave application and its API. Replace `"your-server-url.com"`, `"your-jwt-token"`, `"user-id-here"`, `"workspace-id-here"`, and `"list-id-here"` with actual values when making requests.

Feel free to explore and use TaskWave to manage your tasks and projects efficiently!
```

Replace `"your-server-url.com"`, `"your-jwt-token"`, `"user-id-here"`, `"workspace-id-here"`, and `"list-id-here"` with the actual values relevant to your project. This README.md file can be placed in your GitHub repository to provide clear documentation for users and contributors.
