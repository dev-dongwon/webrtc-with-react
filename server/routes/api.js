const express    = require('express'),
      router     = express.Router(),
      userRouter = require('./api/user'),
      authRouter = require('./api/auth');

router.use('/users', userRouter);
router.use('/auth', authRouter);

module.exports = router;