const knex = require('knex')({
    client: 'mysql',
    connection: {
      host     : 'mysql.cs02noukcnjb.us-east-2.rds.amazonaws.com',
      user     : 'admin',
      password : 'Test!123',
      database : 'demo'
    },
    // default pooled connection option - 
    // pool: { min: 2, max: 10 }
  });

module.exports = knex;