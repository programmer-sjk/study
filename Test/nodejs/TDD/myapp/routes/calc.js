var express = require('express');
var router = express.Router();

var calcController = require('../controller/calc').calc_controller

router.get('/', calcController);

module.exports = router;
