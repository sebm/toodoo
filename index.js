'use strict';

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

class TaskList {
	constructor() {
		this.tasks = [];
	}

	addTask(task) {
		this.tasks.push({ taskText: task })
	}

	getTasks() {
		return this.tasks;
	}
}

const tl = new TaskList()

app.get('/api/tasks', (req, res) => {
	res.json({
		tasks: tl.getTasks()
	});
});

app.post('/api/tasks', (req, res) => {

});

app.use('/', express.static('static'));

app.listen(SERVER_PORT, function() {
	console.log(`node process listening on ${SERVER_PORT}`);
});
