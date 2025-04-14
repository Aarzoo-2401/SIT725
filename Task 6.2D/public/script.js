const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // if index.html, script.js and style.css are inside public/



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calcForm');
    const resultText = document.getElementById('resultText');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const numA = parseFloat(document.getElementById('numA').value);
      const numB = parseFloat(document.getElementById('numB').value);
      const operation = document.getElementById('operation').value;
  
      // Map operation to corresponding API endpoint
      const urlMap = {
        add: '/add',
        subtract: '/subtract',
        multiply: '/multiply',
        divide: '/divide'
      };

      const url = urlMap[operation];
  
      
    });
  });

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});

app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
  res.json({ result: a / b });
});

app.listen(port, () => {
  console.log(`Calculator server running at http://localhost:${port}`);
});
