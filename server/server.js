var express = require('express');
var mongoose = require('mongoose');
var app = express ();
var dateFormat = require('dateFormat');

app.use(express.static('public'))

var db = mongoose.connect("mongodb://multiayudavital_web_app1:multiayudavital1@ds111535.mlab.com:11535/multiayudavital",
  {useMongoClient: true,}
);
var conn = mongoose.connection;

var exports = module.exports = {};



app.get('/usuarioMobil', function (req, res) {
  res.send('Hola Mundo usuarioMobil')
})

app.get('/usuarioWeb', function (req, res) {


console.log('Este es el nombre de usuario: ' + req.query.nombreUsuario);
console.log('Este es el tipo de emergencia: ' + req.query.tipoEmergencia);
console.log('Esta es la ubicacion: ' + req.query.ubicacion);
    
console.log('Esta es la ubicacion: ' + db);
console.log('Esta es la ubicacion: ' + db);
console.log('Esta es la ubicacion: ' + db);

var  usuario = req.query.usuario;
var tipoEmergencia = req.query.tipoEmergencia;
var ubicacion = req.query.ubicacion;
var fecha = dateFormat(Date.now(), "yyyy-mm-dd h:MM:ss");
var datosAInsertar = {'usuario' : usuario , 'tipoEmergencia': tipoEmergencia ,'ubicacion':ubicacion, 'fecha':fecha};
conn.collection('usuarios_emergencias').insert(datosAInsertar);

res.send('Hola Mundo usuarioWeb')
})



var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log(`Example app listening on ${port}!`)
})

exports.closeServer = function(){
  server.close();
  db.disconnect();
  console.log('bye')
};
//JUAN PABLO es mi compai
