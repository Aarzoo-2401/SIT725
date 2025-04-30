// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (make sure to replace the connection string with your own)
mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// Define a simple project model
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});
const Project = mongoose.model('Project', projectSchema);

// API route to get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);  // Send the projects array as the response
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving projects' });
  }
});

// API route to create a new project (optional, if you want to post projects)
app.post('/api/projects', async (req, res) => {
  const { name, description } = req.body;
  const newProject = new Project({ name, description });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);  // Send the saved project
  } catch (err) {
    res.status(500).json({ message: 'Error creating project' });
  }
});

// Set up a basic home route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app; // Export the app for testing purposes
