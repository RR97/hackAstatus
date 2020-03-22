const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongo = require('mongoose');
const app = express();

const shops  = require('./routes/shops');
// const cors = require('cors');

// Connecting to the prod database -- for local db: mongodb://localhost:27017/local
mongo.connect("mongodb+srv://Admin:I1CHWFJnvBI4Y0yy@cluster-nkt6h.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database!"))
  .catch(error => console.log("Database error:" + error));

// CORS Middleware
// app.use(cors());

// Set Static Folder
app.use(express.static(__dirname + '/static'));

// Body Parser Middleware
app.use(bodyParser.json());

// Index Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});
app.use('/api/shops', shops);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
