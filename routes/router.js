const express = require("express");
const router = express.Router();
const pool = require("../database");





// url: host:port/api/getallfacilities
router.get(`/getallfacilities`, (req, res, next) => {
    let sql = `SELECT * FROM facilitys`;
    pool.query(sql, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(result);
        }
    })
})

module.exports = router;