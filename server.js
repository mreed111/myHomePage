var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (reqest, response, next) {
  if (request.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    response.redirect('http://' + request.hostname + request.url);
  }
});


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on Port ' + PORT);
});
