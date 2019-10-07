const express        = require('express'),
      router         = express.Router(),
      roomController = require('../../controller/room');

// create room
router.post('/:namespace', roomController.createRoom);
// get room info
router.get('/:namespace/:roomId', roomController.getRoom);

module.exports = router;
