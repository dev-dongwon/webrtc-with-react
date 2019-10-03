const express    = require('express'),
      router     = express.Router(),
      userRouter = require('./api/user'),
      authRouter = require('./api/auth'),
      roomRouter = require('./api/room');

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/rooms', roomRouter);

module.exports = router;