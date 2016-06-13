var express = require('express');
var app = express();

var webpack = require('webpack');
var config = require('./webpack.config.js')

var WebpackDevServer = require('webpack-dev-server')

var WEBPACK_PORT = 3030;
var SERVER_PORT = 3031;

var server = new WebpackDevServer(webpack(config), {
	proxy: {
		"*" : `http://localhost:${SERVER_PORT}`
	}
});

server.listen(WEBPACK_PORT, 'localhost')

app.get('/api/tasks', function(req, res) {
	res.json({
		tasks: [
			{
				taskText: 'Wash the dishes'
			},
			{
				taskText: 'Pay brent'
			}
		]
	});
});

app.use('/', express.static('static'));

app.listen(SERVER_PORT, function() {
	console.log(`listening on ${SERVER_PORT}`);
});
