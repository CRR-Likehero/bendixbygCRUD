const router = require('express').Router();
const crudController = require('../controllers/crudController');

router
.route('/')
.post(crudController.createOne)
.delete(crudController.deleteOne)
.patch(crudController.updateOne)

module.exports = router;