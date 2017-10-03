const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const passport = require('passport');

passport.use(new LocalStrategy((first_name, password, next) => {
  User.findOne({ first_name })
  .then(user =>{
    if (!user)
      return next(null, false, { message: 'Incorrect username' });

    if (!bcrypt.compareSync(password, user.password))
      return next(null, false, { message: 'Incorrect password' });

    next(null, user);
  })
  .catch(e => next(e));
}));
