const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res, next) => {
  res.send({ hi: 'there' });
});

app.listen(5000, () => { console.log("opinion-poller is now listening on port 5000")});
