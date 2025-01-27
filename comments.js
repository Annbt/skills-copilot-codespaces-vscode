// Create web server
// Create a new web server using express.js
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// Read a comment
app.get('/comments/:id', (req, res) => {
  res.send(`Read a comment with ID: ${req.params.id}`);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send(`Update a comment with ID: ${req.params.id}`);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send(`Delete a comment with ID: ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Run the server
// Run the server using the following command:
// $ node comments.js
// The server will be running at http://localhost:3000

// Test the server
// Test the server using curl. Run the following commands in a terminal:
// $ curl -X POST http://localhost:3000/comments
// $ curl -X GET http://localhost:3000/comments/123
// $ curl -X PUT http://localhost:3000/comments/123
// $ curl -X DELETE http://localhost:3000/comments/123