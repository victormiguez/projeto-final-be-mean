var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', function(err){
  console.log('Erro de conexao.', err);
});
db.once('open', function () {
  console.log('Conexão aberta - Shop.');
});

var ShopSchema = new Schema({
  name: { 
    type: String, 
    default: ''
  },
  address: {
    logradouro:{
      type: String, 
      default: ''
    },
    numero:{
      type: Number, 
      min: 0
    },
    complemento:{
      type: String, 
      default: ''
    },
    bairro:{
      type: String, 
      default: ''
    },
    cidade:{
      type: String, 
      default: ''
    },
    estado:{
      type: String, 
      default: ''
    },
    pais:{
      type: String, 
      default: ''
    },
  },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shop', ShopSchema);