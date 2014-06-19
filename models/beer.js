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

var BeerSchema = new Schema({
  name: {
    type: String,
    default: '' 
  },
  description: {
    type: String,
    default: '' 
  },
  alcohol: {
    type: Number,
    min: 0
  },
  category: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    min: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Beer', BeerSchema);