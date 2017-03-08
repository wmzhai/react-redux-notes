const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  if( !email || !password ) {
    return res.status(422).send({ error: 'You must provide email and password '});
  }

  // 查看是否存在这个email
  User.findOne({ email: email }, function(err, existingUser){
    if( err ) { return next(err); }

    //如果存在，则返回error
    if( existingUser ) {
      return res.status(422).send({ error: 'Emails is in use' });
    }
  });

  // 如果email不存在，则创建用户并保存到数据库
  const user = new User({
    email: email,
    password: password
  });

  //保存到数据库
  user.save(function(err){
    if(err) {return next(err);}

    //反馈成功信息
    res.json({ token: tokenForUser(user) });
  }); 
}