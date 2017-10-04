const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const passport = require('passport');

passport.use(new LocalStrategy((email, password, next) => {
  User.findOne({ email })
  .then(user =>{
    if (!user)
      return next(null, false, { message: 'Incorrect email' });

    if (!bcrypt.compareSync(password, user.password))
      return next(null, false, { message: 'Incorrect password' });

    next(null, user);
  })
  .catch(e => next(e));
}));
