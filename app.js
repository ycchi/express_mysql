const express = require("express");
const session = require('express-session')
const jwt = require('jsonwebtoken');
// handles multipart/form-data for uploading files
const multer  = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors')

const pool = require("./database");
const router = require("./routes/router");

const app = express();

// Enable AllCORS Requests

// const corsOptions = {
//     origin: '127.0.0.1:5500',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));

// app.use(cors())
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


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
