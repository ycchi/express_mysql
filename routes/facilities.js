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

router.get(`/bysuborgid/:suborgId`, (req, res, next) => {
    knex.select('*').from('facilities')
    .where('suborgId', parseInt(req.params.suborgId))
        .then(rows => {
            res.status(200).send(rows);
        })
        .catch(e=>next(e));
});

router.post(`/add`, (req, res, next) => {
    console.log(req.body)
    // knex('facilities').insert([
    //     {facilityName: req.body.facilityName},
    //     {suborgId: parseInt(req.body.suborgId)},
    //     {orgId: parseInt(req.body.orgId)}
    //     ])
    knex('facilities').insert({
        facilityName: req.body.facilityName,
        suborgId: parseInt(req.body.suborgId),
        orgId: parseInt(req.body.orgId)
    })
    .then(result => {
        res.status(200).send(result)
    })
    .catch(e => next(e));
})

module.exports = router;