const express        = require('express'),
      router         = express.Router(),
      roomController = require('../../controller/room');

// create room
router.post('/', roomController.createRoom);
// get room info
router.get('/:roomId', roomController.getRoom);

module.exports = router;
