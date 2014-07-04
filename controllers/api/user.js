var User = require('../../models/user');

var _user = {
  create: function(req, res){
    var dados = req.body;
    var model = new User(dados);

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
    User.find({}, function (err, data) {
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
    User.findOne(query, function (err, data) {
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
    User.update(query, mod, function (err, data) {
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
 
    User.remove(query, function(err, data) {
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

module.exports = _user;