var express = require('express');
var router = express.Router();
const loginController = require('../controllers/login');
const tlController = require('../controllers/topLevel');


/* GET home page. */
router.get('/login', loginController.routeDisplay);
router.get('/', tlController.routeDisplay);

module.exports = router;
