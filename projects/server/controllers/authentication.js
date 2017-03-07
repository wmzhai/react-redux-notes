const User = require('../models/user');

exports.signup = function(req, res, next) {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

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
    res.json(user);
  }); 
}