var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller_test');


/* GET home page. */
router.get('/', controller.topLevel);
router.get('/db', controller.db);

module.exports = router;
