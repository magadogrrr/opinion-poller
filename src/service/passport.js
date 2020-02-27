const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
  let user;
  try {
    user = await User.findById(id);
    if(user) {
      done(null, user);
    }
  } catch (err) {
    done(err);
  }
});



passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
      let user;
      try {
        user = await User.findOne({googleId: profile.id});
        if (!user) {  
          user = await new User({googleId: profile.id}).save() 
        }
        done(null, user);
      } catch(err) {
          done(err);
      }
  })
);
