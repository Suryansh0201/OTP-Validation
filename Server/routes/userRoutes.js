const router = require('express').Router();
const UserController = require('../controllers/userController');

router.post('/valid',UserController.uservalidation);
router.post('/verify',UserController.verifyOTP);

module.exports = router;