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


var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log('Example app listening on ${port} 3000!')
})

exports.closeServer = function(){
  server.close();
  db.disconnect();
  console.log('bye')
};
//JUAN PABLO es mi compai
