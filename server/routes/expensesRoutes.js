var express = require('express');
var router = express.Router();
var expensesController = require('../controllers/expensesController.js');

router.get('/', expensesController.list);

router.get('/:id', expensesController.show);

router.post('/', expensesController.create);

router.put('/:id', expensesController.update);

router.delete('/:id', expensesController.remove);

module.exports = router;
