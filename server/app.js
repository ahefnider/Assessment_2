var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var showAnimals = require('./routes/animals');
var addAnimal = require('./routes/addanimal');
// var random = require('./routes/randomquantity');


app.set('port', 5000);

app.use(bodyParser.urlencoded( {extended: true} ));

app.use('/animals', showAnimals);
app.use('/addanimal', addAnimal);
// app.use('/randomquantity', random);



app.get('/*', function(req, res) {
  console.log('request params', req.params);
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
