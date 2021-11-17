var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('AUTH: respond with a resource');
});

module.exports = router;
