var express = require('express');
var mongoose = require('mongoose');
var app = express ();

app.configure (function() {
  app.use(express.bodyparser());
  app.use(express.methodOverride());
  app.use(app.router);
});
app.get('/',function(req,res){
  res.send('hola, mundo');
});
app.listen(5000);
console.log('servidor express escuchando en el puerto 5000');
#JUAN PABLO es mi compai
   
