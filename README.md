# ToDoList Web App 

A lightweight and efficient todo list web application built with Node.js, allowing users to keep track of their daily tasks.

## Introduction

This Node.js ToDo Web App is a simple yet powerful tool for managing your day-to-day tasks. It's built to offer a straightforward user experience while providing all the fundamental features you’d expect from a task management tool.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine by running:

```bash
node --version
npm --version
```

If Node.js and npm are not installed, download and install them from [Node.js official website](https://nodejs.org/).

### Installation

Clone the repository to your machine and install the necessary npm packages

```bash
git clone https://github.com/your-username/node-todo-web-app.git
cd node-todo-web-app
npm install
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Features

- Create, read, update, and delete (CRUD) tasks
- Filter tasks by completed/uncompleted status
- Persistent storage with a database

## Running Tests

To run tests, execute the following command:

```bash
npm test
```

## Deployment

This section should explain how to deploy this on a live system. Typically, for a Node.js application, you would need to set up a server and possibly a process manager like PM2. Instructions could be:

```bash
npm run build
pm2 start ecosystem.config.js
```

## Built With

- [Node.js](https://nodejs.org/) - The runtime environment
- [Express](https://expressjs.com/) - The web application framework
- [EJS](https://ejs.co/) - The template engine for rendering views
- [MongoDB](https://www.mongodb.com/) - The database used for storing tasks
- [Mongoose](https://mongoosejs.com/) - Object Data Modeling (ODM) library for MongoDB and Node.js