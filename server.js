var express = require('express'); 
var app = express(); 
var routes = require('./public/app.js');

var PORT = process.env.PORT || 3000;

routes(app);

app.listen(PORT, function () { 
	console.log('Express server started on port ' + PORT + '!');
});
