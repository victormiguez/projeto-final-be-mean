var Beer = require('../../models/beer');
var createCtrl = require('../partial/create');

console.log(createCtrl);
var _beer = {
  create: createCtrl('req', 'res', 'Beer', 'Cerveja inserida: '),
  // create: function(req, res){
  //   var dados = req.body;
  //   var model = new Beer(dados);

  //   model.save(function (err, data) {
  //     if (err){
  //       console.log('Erro: ', err);
  //       msg = 0;
  //     }
  //     else{
  //       console.log('Cerveja Inserida: ', data);  
  //       msg = data 
  //     }
  //     res.send(msg);
  //   });
  // },
  retrieve: function(req, res){
    Beer.find({}, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 0;
      }else{
        console.log('Listagem: ', data);  
        msg = data; 
      }
      res.json(msg);
    });
  },
  findOne: function(req, res){
    var query = {_id: req.params.id};
    Beer.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 0;
      }else{
        console.log('Listagem: ', data);  
        msg = data; 
      }
      res.json(msg);
    });
  },
  update: function(req, res){
    var query = {_id: req.params.id};
    var mod = req.body;
    Beer.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 0;
      }else{
        console.log('Cerveja atualizada com sucesso', data);
        msg = data;
      } 
      res.json(msg);
    });
  },
  delete: function(req, res){
    var query = {_id: req.params.id};
 
    Beer.remove(query, function(err, data) {
      if(err) {
        console.log(err);
        msg = 0;
      } else {
        console.log('Cerveja deletada com sucesso', data);
        msg = data;
      }
      res.json(msg);
    });
  }
}

module.exports = _beer;

