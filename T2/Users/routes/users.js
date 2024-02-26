var express = require('express');
var db = require("../database/mysqlDB");
const { resolveModuleName } = require('typescript');
var router = express.Router();

/* GET users listing. */
router.get('/ejemplo', function(req, res, next) {
  res.send('respond with a resource hello');
});
router.post('/add', function (req,res,next) {

  res.send(req.body.title);
});
router.get('/list',function (req,res,next) {
  let connection = db.createConnection();
  connection.connect((error)=>{
    if(error){
      //aviso del error
    }else{
      connection.query("SELECT * FROM usuarios",(err,result)=>{
        if(err){
          //aviso del error
        }else{
          connection.end();
          if(results.lenght>0){
            res.status(200).send({code:1, results : result});
          }else{
            res.status(200).send({code:0, results : "sin resultado"});

          }
        }
      })
    }
  })
  res.send("Listando usuarios");
});
router.get('/list/:nombre' , function (req , res, next) {
  res.send("Listando nombre concreto")
});
module.exports = router;
