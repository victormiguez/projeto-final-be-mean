var express = require('express');
var router = express.Router();
var beer = require('../../controllers/api/shop');

router.get('/', beer.retrieve);

router.get('/:id', beer.findOne);

router.post('/', beer.create);

router.put('/:id', beer.update);

router.delete('/:id', beer.delete);

module.exports = router;