module.exports = function(req, res, modelName, msgReturn){
  var dados = req.body;
  var model = new modelName(dados);

  model.save(function (err, data) {
    if (err){
      console.log('Erro: ', err);
      msg = 0;
    }
    else{
      console.log(msgReturn, data);  
      msg = data 
    }
    res.send(msg);
  });
}