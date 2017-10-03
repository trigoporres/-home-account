var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projectController.js');

/*
 * GET
 */
router.get('/', projectController.list);

/*
 * GET
 */
router.get('/:id', projectController.show);

/*
 * POST
 */
router.post('/', projectController.create);

/*
 * PUT
 */
router.put('/:id', projectController.update);

/*
 * DELETE
 */
router.delete('/:id', projectController.remove);

module.exports = router;
