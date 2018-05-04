var express = require('express');
var router = express.Router();
//var quizzes = require('./models/index')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Credits. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});
/* GET Quizzes. */
router.get('/credits', function(req, res, next) {
  var q = quizzes.findAll();
  res.render('quizzes', { title: 'Quizzes' });
});

module.exports = router;
