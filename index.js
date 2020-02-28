const express = require('express');

require('./src/service/mongodb');
require('./src/models/user');
require('./src/service/passport');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
const authRouter = require('./src/router/auth');
const apiUserRouter = require('./src/router/api/users');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/api/users', apiUserRouter);

app.get('/', (req, res, next)=> {
  res.send({report: 'success'});
})



app.listen(PORT, () => { console.log("opinion-poller is now listening on port 5000")});
