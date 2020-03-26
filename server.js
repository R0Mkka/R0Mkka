var express = require('express');

var applyControllers = require('./controllers');
var PORT = 3000;

var app = express();

applyControllers(app);

app.listen(PORT, function() {
  console.log('The server is listening on port ' + PORT + '...');
});