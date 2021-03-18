var express = require('express');
var router = express.Router();
var LocalStorage = require('node-localstorage').LocalStorage;
   //localStorage = new LocalStorage('./scratch');

/* GET home page. */
router.get('/', function(req, res, next) {
  // req.session.i = 1;
  // console.log('req.cookies[connect.sid]-----------'+req.session.i);
  // console.log('req.cookies[connect.sid]-----------'+req.cookies['connect.sid']);
  // cookies.defaults.secure = true;
  // cookies.defaults.SameSite = 'None';
  // res.setHeader('set-cookie', [
  //   `connect.sid=${req.sessionID}; SameSite=None: Secure`
  // ]);
  console.log('name-ls2-'+LocalStorage.getItem('name'));
  console.log('name city-ls2-'+LocalStorage.getItem('city'));
  res.render('index', { title: 'App1' });
});

module.exports = router;
