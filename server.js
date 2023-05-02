const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const questItemsRouter = require('./routes/questItems');

// Connect to MongoDB
const DB_URI = 'mongodb+srv://duncan527:cpUXlD1QE5zHGvoY@cluster0.36kobiz.mongodb.net/questApp?retryWrites=true&w=majority';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error connecting to MongoDB:', error));

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json()); // To parse JSON request bodies


// Send the "index.html" file for all requests
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use('/api/questItems', questItemsRouter);

// Start the server
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});




