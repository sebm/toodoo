var express = require('express');
var app = express();

var PORT = '3030';

app.get('/', function(req, res) {
	res.send('Hey');
})

app.listen(PORT, function() {
	console.log(`listening on ${PORT}`);
});
