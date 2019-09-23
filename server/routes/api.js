const express    = require('express'),
      router     = express.Router(),
      userRouter = require('./api/user');

router.use('/users', userRouter);

module.exports = router;