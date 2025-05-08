# 📝 ToDo API

A simple RESTful API built with **Express.js** to manage a list of ToDo items. It supports basic CRUD operations and includes interactive API documentation with **Swagger UI**.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) ToDo items
- Interactive API docs via Swagger (`/api-docs`)
- CORS-enabled for frontend integration
- Mock in-memory data (or extend with Sequelize/SQLite)

---
## install dependencies
npm install
## run server
node server.js


## list of api endpoints
| Method | Endpoint     | Description            |
| ------ | ------------ | ---------------------- |
| GET    | `/todos`     | Get all todos          |
| GET    | `/todos/:id` | Get a specific todo    |
| POST   | `/todos`     | Create a new todo      |
| PUT    | `/todos/:id` | Update a specific todo |
| DELETE | `/todos/:id` | Delete a specific todo |

# API Docs using Swagger
http://localhost:5000/api-docs
