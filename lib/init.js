var fs = require('fs');
var program = require('commander');

function loadTemplate(name) {
	return fs.readFileSync(path.join(__dirname, '..', 'demo', name), 'utf-8');
}

var destinationPath = program.args.shift() || '.';

var sayHello = function (name) {
	console.log(destinationPath);
	console.log(path.join(__dirname, '..', 'demo', 'README.md'));
};

exports.sayHello = sayHello;