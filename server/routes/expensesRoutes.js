var express = require('express');
var router = express.Router();
var expensesController = require('../controllers/expensesController.js');

/*
 * GET
 */
router.get('/', expensesController.list);

/*
 * GET
 */
router.get('/:id', expensesController.show);

/*
 * POST
 */
router.post('/', expensesController.create);

/*
 * PUT
 */
router.put('/:id', expensesController.update);

/*
 * DELETE
 */
router.delete('/:id', expensesController.remove);

module.exports = router;
