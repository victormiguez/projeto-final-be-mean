var Beer = require('../../models/beer');

var _beer = {
  create: function(req, res){
    var dados = req.body;
    var model = new Beer(dados);

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
    Beer.find({}, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 0;
      }else{
        msg = data; 
      }
      res.json(msg);
    });
  },
  search: function(req, res){
    var queryRx = {name: new RegExp(req.params.name)};
    var query = {name: req.params.name};
    
    console.log(query);
    console.log(queryRx);
    
    Beer.find(queryRx, function (err, data) {
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
    console.log('Find');
    Beer.findOne(query, function (err, data) {
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
    Beer.update(query, mod, function (err, data) {
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
 
    Beer.remove(query, function(err, data) {
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

module.exports = _beer;