var express = require('express');
var path = require('path');
var router = express.Router();

router.use(express.static(__dirname + 'public'));

router.get('/', function(request, response){
  response.send('The following are pages too!!\n \/cats, \/dogs, \/pigs');
});

router.get('/cats', function(request, response){
  response.send('Meow!!');
});

router.get('/dogs', function(request, response){
  response.send('Woof!!')
});

router.get('/pigs', function(request, response){
  response.send('Oink!!');
})

module.exports = router;
