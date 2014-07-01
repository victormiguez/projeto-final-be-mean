var express = require('express');
var router = express.Router();
var user = require('../../controllers/api/user');
var user = require('../../controllers/passport');

router.get('/', user.retrieve);

router.get('/:id', user.findOne);

router.post('/', user.create);

router.put('/:id', user.update);

router.delete('/:id', user.delete);

module.exports = router;