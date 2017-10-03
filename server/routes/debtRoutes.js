var express = require('express');
var router = express.Router();
var debtController = require('../controllers/debtController.js');

/*
 * GET
 */
router.get('/', debtController.list);

/*
 * GET
 */
router.get('/:id', debtController.show);

/*
 * POST
 */
router.post('/', debtController.create);

/*
 * PUT
 */
router.put('/:id', debtController.update);

/*
 * DELETE
 */
router.delete('/:id', debtController.remove);

module.exports = router;
