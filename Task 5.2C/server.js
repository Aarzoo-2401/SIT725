var express = require("express")
const mongoose = require('mongoose');

//Routes
const routes = require("./routes");

var app = express()
var port = process.env.port || 3000

mongoose.connect('mongodb://localhost:27017/sit725', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);


// 4. Start server
app.listen(port, () => {
console.log(`App listening on port ${port}`);
});
