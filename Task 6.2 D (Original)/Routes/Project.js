const express = require('express');
const router = express.Router();
const Project = require('../Models/project'); // Adjust the path if needed

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
