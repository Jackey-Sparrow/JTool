var fs = require('fs');
var program = require('commander');
var path = require('path');
var shelljs = require('shelljs');

var pkg = require('../package.json');

var version = pkg.version;

//process.exit = exit

//function loadTemplate(name) {
//	return fs.readFileSync(path.join(__dirname, '..', 'demo', name), 'utf-8');
//}

//var destinationPath = program.args.shift() || '.';

//before(program, 'outputHelp', function () {
//	this.allowUnknownOption();
//});

//program
//	.version(version)
//	.usage('[options] [dir]')
//	.parse(process.argv);

var sayHello = function (name) {
	//console.log(program);
	//var p = path.join(__dirname, '..', 'demo', 'README.md');//原路径
	var p = path.join(__dirname, '..', 'demo/*');//原路径

	//shelljs.cp(p,'/output');
	//shelljs.cp('-R',p,'./');//ok
	shelljs.cp('-R',p,'./');//ok
	//shelljs.rm('-r',p);
	//shelljs.ls(p);

};

//function before(obj, method, fn) {
//	var old = obj[method];
//
//	obj[method] = function () {
//		fn.call(this);
//		old.apply(this, arguments);
//	};
//}


exports.sayHello = sayHello;