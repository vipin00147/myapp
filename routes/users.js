var express = require('express');
var database = require('../modules/database');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var users = database.find({});

  users.exec(function(err, result){
    if(err) throw err
    res.render('user_list',{ title : "Users List", userList : result});
  })
  //res.send(database.getUsers(res));
});

module.exports = router;
