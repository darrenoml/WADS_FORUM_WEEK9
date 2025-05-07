const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const todoRoutes = require('./routes/todoRoutes'); // Make sure this file exists

const app = express();
const PORT = 5000; // Run backend separately from frontend

// Middleware
app.use(cors()); // Allow all origins by default
app.use(express.json()); // Parse incoming JSON

// Routes
app.use('/todos', todoRoutes); // All /todos CRUD routes

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  swaggerOptions: {
    plugins: [], // Avoid external CORS issues like Aitopia
    docExpansion: 'none'
  }
}));

// Root route
app.get('/', (req, res) => {
  res.send('🎉 ToDo API Backend is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend is live at: http://localhost:${PORT}`);
  console.log(`📘 Swagger UI available at: http://localhost:${PORT}/api-docs`);
});
