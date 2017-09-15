var express = require('express');
var app     = express();

app.get('/cheer.txt', function(req, res) {
  res.end('Good job!');
});

app.get('/jeer.txt', function(req, res) {
  res.end('Seriously?');
});

app.listen(8080, function() {
  console.log('Listen on port 8080');
});
