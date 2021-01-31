const router = require('express').Router();
const viewController = require('../controllers/viewController');
const protectRoute = require('../utils/verifytoken');

router.get('/', viewController.getOverview);
router.get('/login', viewController.logMeIn);
router.get('/backend', protectRoute, viewController.secretRoute);
router.get('/createarticle', protectRoute, viewController.createArticleRoute)

module.exports = router;