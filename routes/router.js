const express = require("express");
const router = express.Router();
// const pool = require("../database");
const knex = require("../db");


// GET ALL Todo's
// url: host:port/api/getallfacilities
// router.get(`/todo/all`, (req, res, next) => {
//     let sql = `SELECT * FROM TODO`;
//     pool.query(sql, (err, result) => {
//         if (err) {
//             next(err);
//         } else {
//             res.status(200).send(result);
//         };
//     });
// });
router.get(`/todo/all`, (req, res, next) => {
    knex.select('*').from('TODO')
        .then(rows => {
            res.status(200).send(rows);
        })
        .catch(e=>next(e));
})

// POST a Todo
router.post(`/todo/add`, (req, res, next) => {
    knex('TODO').insert([
        {todo: req.body.todo},
        {tags: req.body.tags}
        ])
    .then(result => {
        res.status(200).send(result)
    })
    .catch(e => next(e));
})

// UPDATE(PUT) a Todo
router.put(`/todo/update/:id`, (req, res, next) => {

    knex('TODO').where('id', parseInt(req.params.id))
    .update({
        todo: req.body.todo,
        tags: req.body.tags
    })
    .then(result => {
        res.status(200).send(`Updated ${result} row(s) successfully`)
    })
    .catch(e => next(e));
})


// DELETE a Todo
router.delete(`/todo/delete/:id`, (req, res, next) => {
    knex('TODO').where('id', parseInt(req.params.id))
    .del()
    .then(result => {
        res.status(200).send(`Deleted ${result} row(s) successfully`)
    })
    .catch(e => next(e));
})

module.exports = router;