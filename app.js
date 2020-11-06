const express = require("express");
const session = require('express-session')
const jwt = require('jsonwebtoken');
// handles multipart/form-data for uploading files
const multer  = require('multer');
const bodyParser = require('body-parser');

const pool = require("./database");
const router = require("./routes/router");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Initialize routes
app.use('/', router);

// Error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

app.listen('3000', () => {
    console.log(`Server started on port 3000`)
});
