var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req)
  res.json({name: "KCC Tier-1 college"});
});

module.exports = router;