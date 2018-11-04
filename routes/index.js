var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("In index")
    req.user = 'Prathik'
  res.render('viewCourses', { title: 'Express',header: true, navbar: true});
});

module.exports = router;
