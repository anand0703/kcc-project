var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req)
  res.json({name: "KCC Tier-1 college"});
});

router.get('/:da-:ta', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log(req.params.da)
    res.json({name: req.params.da + " and " + req.params.ta + " are good student"});
  });

router.get('/:da', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log(req.params.da)
    res.json({name: req.params.da});
  });

  



module.exports = router;