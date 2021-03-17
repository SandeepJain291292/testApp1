var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('set-cookie', [
    'cookie1=value1; SameSite=Lax',
    'cookie2=value2; SameSite=None; Secure',
  ]);
  res.render('index', { title: 'App1' });
});

module.exports = router;
