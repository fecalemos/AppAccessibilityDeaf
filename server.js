// SET UP - get all the tools
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static('public'));
// make express look in the public directory for custom assets (css/js/img)
app.use("/css", express.static(__dirname + '/public/css'));
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/img", express.static(__dirname + '/public/img'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5001;

// run server
var server = app.listen(port, function() {
    console.log('listening on *:' + port);
});

// socket.io to communication between the users
var io = require('socket.io')(server);

io.on('connection', function(socket){

  socket.on('speech', function(data) {
    console.log('msg: ' + data.msg);
    io.sockets.emit('speech', {
      msg: data.msg
    });
  });
});
