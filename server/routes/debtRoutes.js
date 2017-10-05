var express = require('express');
var router = express.Router();
var debtController = require('../controllers/debtController.js');

router.get('/', debtController.list);

router.get('/:id', debtController.show);

router.post('/', debtController.create);

router.put('/:id', debtController.update);

router.delete('/:id', debtController.remove);

module.exports = router;
