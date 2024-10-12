const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// Middleware 
app.use(bodyParser.json())
app.use(cors())

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/blogAPI', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB Connected!"))
.catch(err => console.log('err:', err))
