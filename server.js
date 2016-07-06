var express = require('express');
var path = require('path');
var app = express();

var animalRouter = require('./animals');

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname + 'public')));

app.use('/animals', animalRouter);

app.listen(3000, function(request, response){
  console.log('Hello World!!');
});

app.get('/', function(request, response){
  response.send('This did not work.');
})
