const express = require('express');
const router = express.Router();
const regController = require('../controllers/registration');
const loginController = require('../controllers/login');
const tlController = require('../controllers/topLevel');


router.get('/register', regController.routeDisplay);
router.get('/login', loginController.routeDisplay);
router.post('/', tlController.routeDisplay);

module.exports = router;
