const express        = require('express'),
      router         = express.Router(),
      userController = require('../../controller/user');

// read user info
router.get('/:id', userController.getUser);

module.exports = router;
