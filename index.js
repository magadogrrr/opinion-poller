const express = require('express');

require('./src/service/mongodb');
require('./src/models/user');
require('./src/service/passport');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');

const keys = require('./config/keys');
const authRouter = require('./src/router/auth');
const apiUserRouter = require('./src/router/api/users');
const apiSurveyRouter = require('./src/router/api/surveys');
const apiStripeRouter = require('./src/router/api/stripe');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

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
app.use('/api/surveys', apiSurveyRouter);
app.use('/api/stripe', apiStripeRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(PORT, () => { console.log("opinion-poller is now listening on port 5000")});
