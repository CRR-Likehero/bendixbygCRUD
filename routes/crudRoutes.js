const router = require('express').Router();
const crudController = require('../controllers/crudController');

router
.route('/')
.post(crudController.createOne)
.delete(crudController.deleteOne)

module.exports = router;