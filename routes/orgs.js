const express = require('express');
const router = express.Router();
const knex = require("../db");

// Get all facilities by orgId
router.get(`/facilitiesOnly/:orgId`, (req, res, next) => {
    knex.select('*').from('organization').leftJoin('facilities', 'organization.orgId', parseInt(req.params.orgId))
        .then(rows => {
            res.status(200).send(rows);
        })
        .catch(e=>next(e));
});

// Return hierarchial structure: org -> suborg -> facilities 
router.get(`/:orgId`, (req, res, next) => {

    let orgObj = {};

    knex.select('*').from('organization').where('orgId', parseInt(req.params.orgId))
        // .then(rows => {
        //     res.status(200).send(rows);
        // })
        .then(data => {
            orgObj = data[0];
            return orgObj;
        })
        .then(orgObj => {
            return knex.select('*').from('suborganization').where('orgId', orgObj['orgId'])
        })
        .then(async (suborgs) => {
            const getFacilities = (suborgId) => {
                return knex.select('*').from('facilities').where('suborgId', suborgId)
            }

            Promise.all(
                suborgs.map(async (suborg) => {
                    const facilities = await getFacilities(suborg.suborgId)
                    suborg.facilities = JSON.parse(JSON.stringify(facilities));
                    return suborg;
                })
            )
            .then(suborgs => {
                orgObj.suborgs = suborgs;
                return orgObj
            })
            .then(orgObj => res.status(200).send(orgObj))
            .catch(e=> rethrow(e))
        })
        .catch(e=>next(e));
});

module.exports = router;