var express = require('express');
var mongoose = require('mongoose');
var app = express ();

var db = mongoose.connect("mongodb://multiayudavital:multiayudavital1@ds111535.mlab.com:11535/multiayudavital",
  {useMongoClient: true,}
);

var exports = module.exports = {};

app.get('/', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/usuarioMobil', function (req, res) {
  console.log('Este es el nombre de usuario: ' + req.query.nombreUsuario);
console.log('Este es el tipo de emergencia: ' + req.query.tipoEmergencia);
console.log('Esta es la ubicacion: ' + req.query.ubicacion);
  res.send('Hola esta es una prueba');
})

app.get('/usuarioWeb', function (req, res) {
  res.send('Hola Mundo usuarioWeb');
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log(`Example app listening on ${port}!`);
})

exports.closeServer = function(){
  server.close();
  db.disconnect();
  console.log('bye');
};
//JUAN PABLO es mi compai
