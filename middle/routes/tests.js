var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({tests: 1});
});
router.get('/1', function(req, res, next) {
  res.send({success: true});
});
module.exports = router;
