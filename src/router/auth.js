const express = require('express');
const passport = require('passport');
const router = new express.Router();
const Controller = require('../controller/auth');

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

router.get('/google/callback', passport.authenticate('google'), Controller.login);

router.get('/logout', Controller.logout);



module.exports = router;
