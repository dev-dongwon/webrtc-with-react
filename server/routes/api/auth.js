const express        = require('express'),
      router         = express.Router(),
      authController = require('../../controller/auth'),
      { validator, checkValidation }  = require('../../middlewares/validator');

/*
  @route   GET api/auth
  @desc    Get logged in user
  @access  Private
*/
router.get('/', validator.auth, checkValidation, authController.login);

module.exports = router;
