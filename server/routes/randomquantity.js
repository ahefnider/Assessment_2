// var express = require('express');
// var router = express.Router();
// var pg = require('pg');
// var connectionString = 'postgres://localhost:5432/mu';
//
// var quantity = 1
// // Math.round(randomNumber(1, 100));
//
// function randomNumber(min, max){
//      return Math.floor(Math.random() * (1 + max - min) + min);
//  }


module.exports = function (min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
};
// module.exports = router;
