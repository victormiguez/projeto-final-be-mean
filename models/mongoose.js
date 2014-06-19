var configdb = function() {
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/projeto-final-mean');
  var Schema = mongoose.Schema;

  var db = mongoose.connection;
  db.on('error', function(err){
    console.log('Erro de conexao.', err);
  });
  db.once('open', function () {
    console.log('Conexão aberta.');
  });
}

module.exports = configdb;