var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

// var buf = new Buffer('testing ...');

app.get('/', function(request, response) {	
  response.write(fs.readFileSync('./index.html', "utf8").toString());
  response.end();
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
