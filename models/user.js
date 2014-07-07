var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', function(err){
  console.log('Erro de conexao.', err);
});
db.once('open', function () {
  console.log('Conexão aberta - User.');
});

var UserSchema = new Schema({
  name: {
    required: true,
    type: String,
    default: '' 
  },
  birth:{
    type: String,
    min: 0
  },
  username: {
    required: true,
    type: String,
    default: '' 
  },
  password: {
    required: true,
    type: String,
    default: '' 
  },
  email: {
    required: true,
    type: String,
    default: ''
  },
  beers:{
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('User', UserSchema);