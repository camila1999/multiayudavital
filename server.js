var express = require('express');
var mongoose = require('mongoose');
var dateFormat = require('dateFormat');
var app = express ();

var db = mongoose.connect("mongodb://multiayudavital_web_app1:multiayudavital1@ds111535.mlab.com:11535/multiayudavital",
  {useMongoClient: true,}
);
db.on('error', console.error.bind(console, 'connection error:'));
var usuariosEmergenciasSchema = mongoose.Schema({
	fecha: String,
    nombreUsuario: String,
	tipoDeEmergencia: String,
	ubicacion: String
});
var usuariosEmergenciasModel = mongoose.model('Usuarios_Emergencias',usuariosEmergenciasSchema);

var exports = module.exports = {};

app.get('/', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/usuarioMobil', function (req, res) {
  console.log('Este es el nombre de usuario: ' + req.query.nombreUsuario);
  console.log('Este es el tipo de emergencia: ' + req.query.tipoDeEmergencia);
  console.log('Esta es la ubicacion: ' + req.query.ubicacion);

  var fecha = dateFormat(Date.now(), "yyyy-mm-dd h:MM:ss");
  var nombreUsuario = req.query.nombreUsuario;
  var tipoDeEmergencia = req.query.tipoDeEmergencia;
  var ubicacion = req.query.ubicacion;

  var datosAInsertar = new usuariosEmergenciasModel({
	  fecha: fecha,
      nombreUsuario: nombreUsuario,
	  tipoDeEmergencia: tipoDeEmergencia,
	  ubicacion: ubicacion
  });
  datosAInsertar.save();

  usuariosEmergenciasModel.find(function (err, records) {
	  if (err) {
		return console.error(err);
	  }
	  res.send(records);
  });
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
