var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ejemplo', function(req, res, next) {
  res.send('respond with a resource hello');
});
router.post('/add', function (req,res,next) {
  res.send('Añadiendo unn nuevo usuario');
});
router.get('/list',function (req,res,next) {
  res.send("Listando usuarios");
});
router.get('/list/:nombre' , function (req , res, next) {
  res.send("Listando nombre concreto")
});
module.exports = router;
