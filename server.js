var express = require('express');
var app = express ();
var exports = module.exports = {};

app.get('/', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/usuarioWeb', function (req, res) {
  res.send('Hola Mundo usuarioWeb');
})

var port = process.env.PORT || 3000;

var server = app.listen(port)

exports.closeServer = function(){
  server.close();
  db.disconnect();
  console.log('bye');
};
//JUAN PABLO es mi compai
