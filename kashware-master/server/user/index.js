var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

// router.get('/login', controller.login);
router.post('/signUp', controller.signUp);

module.exports = router;