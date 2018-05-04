var express = require('express');
var router = express.Router();
var routerCredits = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Credits. */
router.get('/credits', function(req, res, next) {
  res.send('Responds to: /credits');
});
module.exports = router;
module.exports = routerCredits;