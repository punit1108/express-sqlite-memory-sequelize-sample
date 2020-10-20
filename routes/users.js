var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/add', function (req, res, next) {
  if (!req.body.number1 || !req.body.number2) {
    res.status(400);
    return;
  }
  res.send({
    sum: req.body.number1 + req.body.number2
  })
});

module.exports = router;
