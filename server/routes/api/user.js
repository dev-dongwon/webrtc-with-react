const express        = require('express'),
      router         = express.Router(),
      userController = require('../../controller/user');

// user 등록
router.get('/:id', userController.getUser);
router.post('/')

module.exports = router;