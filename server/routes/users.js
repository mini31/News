
 var passport=require("passport");
 var LocalStrategy=require("passport-local").Strategy;
 var connectflash=require("connect-flash");


var express = require('express');
var router = express.Router();
var User=require('../models/user');
router.post("/add",function(req,res) {
  if(req.body) {
  var uservar=new user();
  uservar.username=req.body.username;
  uservar.password=req.body.password;
  uservar.save(function(err){
  if(err) {
    res.send(err);
  }
  else  {
  res.send("inserted");
  }
    });
  }
  });

router.delete("/delete",function(req,res){
  var request=req.body.username;
  if(request)
  {
    user.remove({username:request},function(err){
      if(err) {
        res.send(err);
      }
      else  {
      res.send("The user was deleted");
      }
    });
  }
});



//authentication request
router.post('/Login',
  passport.authenticate('local', { failureRedirect: '/Login' }),
  function(req, res) {
    res.send('successfully logged in');
  });


module.exports = router;
