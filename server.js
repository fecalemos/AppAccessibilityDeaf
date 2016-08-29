var express = require('express');
var app = express();

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
