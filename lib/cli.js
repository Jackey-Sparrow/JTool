/**
 * Created by lihaozhou on 2016/7/28.
 */
var optimist = require('optimist');
var init = require('./init.js');
var pkg = require('../package.json');
var printHelpLines = require('./help.js');

var Cli = module.exports;

Cli.run = function (processArgv) {
    var argv = optimist(processArgv.slice(2)).argv;

    if ((argv.version || argv.v) && !argv._.length) {
        console.log(pkg.version);
        return;
    }

    var taskName = argv._[0];

    if (argv.help || argv.h) {
        printHelpLines();
        return;
    }

    if (taskName === 'init') {
        init.generateTemplate();
    }

};
