const express = require('express');
const router = express.Router();
const knex = require("../db");

router.get(`/all`, (req, res, next) => {
    knex.select('*').from('facilities')
        .then(rows => {
            res.status(200).send(rows);
        })
        .catch(e=>next(e));
});

router.post(`/add`, (req, res, next) => {
    console.log(req.body)
    knex('facilities').insert([
        {facilityName: req.body.facilityName},
        {suborgId: req.body.suborgId},
        {orgId: req.body.orgId}
        ])
    .then(result => {
        res.status(200).send(result)
    })
    .catch(e => next(e));
})

module.exports = router;