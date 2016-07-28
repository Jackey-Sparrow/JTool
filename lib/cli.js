/**
 * Created by lihaozhou on 2016/7/28.
 */
var optimist = require('optimist');
var init = require('./init.js');

var Cli = module.exports;

Cli.run = function (processArgv) {
	var argv = optimist(processArgv.slice(2)).argv;

	if ((argv.version || argv.v) && !argv._.length) {
		//todo:
		console.log('0.0.1');
		return;
	}

	if (argv.help || argv.h) {
		console.log('help log');
		return;
	}

	console.log(argv._[0]);

	var taskName = argv._[0];

	if (taskName === 'init') {
		init.sayHello('Jackey');
	}

};