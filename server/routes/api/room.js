const express        = require('express'),
      router         = express.Router(),
      roomController = require('../../controller/room');

// create room
router.post('/', roomController.createRoom);

module.exports = router;
