var Shop = require('../../models/shop');

var _shop = {
  create: function(req, res){
    var dados = req.body;
    var model = new Shop(dados);

    model.save(function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 0;
      }
      else{
        msg = data 
      }
      res.send(msg);
    });
  },
  retrieve: function(req, res){
    Shop.find({}, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 0;
      }else{
        msg = data; 
      }
      res.json(msg);
    });
  },
  findOne: function(req, res){
    var query = {_id: req.params.id};
    Shop.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 0;
      }else{
        msg = data; 
      }
      res.json(msg);
    });
  },
  update: function(req, res){
    var query = {_id: req.params.id};
    var mod = req.body;
    Shop.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 0;
      }else{
        msg = data;
      } 
      res.json(msg);
    });
  },
  delete: function(req, res){
    var query = {_id: req.params.id};
 
    Shop.remove(query, function(err, data) {
      if(err) {
        console.log(err);
        msg = 0;
      } else {
        msg = data;
      }
      res.json(msg);
    });
  }
}

module.exports = _shop;