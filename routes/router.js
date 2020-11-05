const express = require("express");
const router = express.Router();
const pool = require("../database");

// GET ALL Todo's
// url: host:port/api/getallfacilities
router.get(`/todo/all`, (req, res, next) => {
    let sql = `SELECT * FROM TODO`;
    pool.query(sql, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(result);
        };
    });
});


// POST a Todo
router.post(`/todo/add`, (req, res, next) => {
    let sql = `INSERT INTO TODO (todo, tags) VALUES (${req.body.todo}, ${req.body.tags})`;
    pool.query(sql, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(result);
        };
    })
})


// UPDATE a Todo
router.put(`/todo/update/:id`, (req, res, next) => {
    let sql = `UPDATE TODO SET todo = ${req.body.todo}, tags = ${req.body.tags} WHERE id = ${req.params.id}`;
    pool.query(sql, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(result);
        };
    })
})


// DELETE a Todo
router.delete(`/todo/delete/:id`, (req, res, next) => {
    let sql = `DELETE FROM TODO WHERE id = ${req.params.id}`;
    pool.query(sql, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(result);
        };
    })
})


module.exports = router;