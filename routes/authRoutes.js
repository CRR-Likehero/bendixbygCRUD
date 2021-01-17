const router = require('express').Router();
const authController = require('../controllers/authController');

router
.post('/register', authController.registerUser)
.post('/login', authController.loginUser)
.get('/logout', authController.logout)


module.exports = router;