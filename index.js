var express = require('express');
var app = express();

var PORT = '3030';

app.get('/api/tasks', function(req, res) {
	res.json({
		tasks: [
			{
				taskText: 'Wash the dishes'
			},
			{
				taskText: 'Pay rent'
			}
		]
	});
});

app.use('/', express.static('static'));

app.listen(PORT, function() {
	console.log(`listening on ${PORT}`);
});
