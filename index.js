var express = require('express');
var app = express();

var PORT = '3030';

app.use('/', express.static('static'));

app.listen(PORT, function() {
	console.log(`listening on ${PORT}`);
});
