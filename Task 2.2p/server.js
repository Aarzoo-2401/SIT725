const express = require("express");
const app = express();

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Simple GET endpoint to return a message
app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

// Addition Endpoint
app.get("/add", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers provided");
  }

  let sum = num1 + num2;
  res.json({ res: `The sum of ${num1} and ${num2} is ${sum}` });
});

// Subtraction Endpoint
app.get("/subtract", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers provided");
  }

  let difference = num1 - num2;
  res.json({ res: `The difference of ${num1} and ${num2} is ${difference}` });
});

// Multiplication Endpoint
app.get("/multiply", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers provided");
  }

  let product = num1 * num2;
  res.json({ res: `The product of ${num1} and ${num2} is ${product}` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
