var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return Promise.reject(new Error('aa'))
});

module.exports = router;
