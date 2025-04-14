const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/add', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  if (!a || !b) {
    return res.status(400).send('Missing input');
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).send('Invalid input');
  }

  const sum = numA + numB;
  res.send(sum.toString());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
