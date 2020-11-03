const express = require("express");
const mysql = require("mysql");

// Create DB connection
const db = mysql.createConnection({
    host     : 'mysql.cs02noukcnjb.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'Test!123',
    database : 'demo'
});

// Connect DB
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`MySQL Connected`)
});



const app = express();

app.listen('3000', () => {
    console.log(`Server started on port 3000`)
});


// Create table
// URL: HOST:PORT/createtable/?tablename=xxxxx
app.get(`/createtable/`, (req, res) => {
    console.log(req.query)
    let sql = `CREATE TABLE ${req.params.tablename} (id int AUTO_INCREMENT, ${req.params.tablename}_title VARCHAR(255), contents VARCHAR(255), PRIMARY KEY (id))`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(`${req.params.tablename} table created.`)
    })
})

