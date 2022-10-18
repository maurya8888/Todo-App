var express = require('express');
var router = express.Router();

var { Tasks } = require('../controllers');

router.get('/', Tasks.index );
router.post('/', Tasks.create_task);
router.post('/update/:uuid', Tasks.update_task);
router.post('/delete', Tasks.delete_task);

module.exports = router;