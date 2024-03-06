// Create a web server

// Import the express module
const express = require('express');
// Create an express application
const app = express();
// create a comment controller
const commentController = require('./controllers/commentController');
// Handle requests for the /comments path to create a new comment
app.post('/comments', commentController.createComment);
// Access a comment by id
app.get('/comments/:id', commentController.getComment);
// Delete a comment by id
app.delete('/comments/:id', commentController.deleteComment);
// Handle requests for the /comments path to get all comments
app.get('/comments', commentController.getAllComments);

// Start the server on port 80
app.listen(80);