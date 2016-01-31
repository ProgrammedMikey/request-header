var express = require('express'); 
var app = express(); 
var PORT = 3000; 

app.get('/', function (req, res) { 
	res.send('Hello Express!');
});

app.listen(PORT, function () { 
	console.log('Express server started on port ' + PORT + '!');
});
