const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


// Create local strategy
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions ,function(email,password,done){
  //验证用户名密码
  User.findOne({email:email},function(err,user){
    if(err) {return done(err,false); } //查找出错
    if(!user){ return  done(null,false); } //查找正确，没找到
    
    //比较密码
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  })
});


// Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};


// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  // 查看payload里的userid是否存在于数据库中，相应做处理
  User.findById(payload.sub, function(err, user){ //payload.sub就应该是userid
    if(err) {return done(err,false); } //查找出错
    if(user) {
      done(null,user); //查找正确，找到了
    } else {
      done(null,false); //查找正确，没找到
    }
  })
});

// Tell passport to use the strategy
passport.use(jwtLogin);
passport.use(localLogin);