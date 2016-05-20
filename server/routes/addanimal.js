var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/mu';
var quantity = require('./randomquantity');

router.post('/', function (req, res) {
  var animal = req.body;
  var bloop = quantity(1, 100);
  console.log(quantity);
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('INSERT INTO zooanimals (species, quantity) ' +
                  'VALUES ($1, $2)',
                   [animal.species, bloop],
                 function (err, result) {
                   done();

                   if (err) {
                     res.sendStatus(500);
                     return;
                   }

                   res.sendStatus(201);
                 });
  });
});

module.exports = router;
