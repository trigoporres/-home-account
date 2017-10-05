var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projectController.js');

router.get('/', projectController.list);

router.get('/:id', projectController.show);

router.post('/', projectController.create);

router.put('/:id', projectController.update);

router.delete('/:id', projectController.remove);

module.exports = router;
