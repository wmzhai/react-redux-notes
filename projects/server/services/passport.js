const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


// Create local strategy
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions ,function(email,passport,done){
  //验证用户名密码
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