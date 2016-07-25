/**
 * Created by lihaozhou on 2016/7/28.
 */
var optimist = require('optimist');
var init = require('./init.js');
var pkg = require('../package.json');

var Cli = module.exports;

Cli.run = function (processArgv) {
    var argv = optimist(processArgv.slice(2)).argv;

    if ((argv.version || argv.v) && !argv._.length) {
        console.log(pkg.version);
        return;
    }

    var taskName = argv._[0];

    if (argv.help || argv.h) {
        console.log('help log');
        Cli.printHelpLines();
        return;
    }

    if (taskName === 'init') {
        init.generateTemplate();
    }

};

Cli.printHelpLines = function printHelpLines() {

    process.stderr.write('\n=======================\n');

    //todo:Tasks
    var TASKS = [
        {
            name: 'kso init',
            description: 'generate template'
        },
        {
            name: 'kso -h | kso -help',
            description: 'help list'
        },
        {
            name: 'kso -v',
            description: 'version number'
        }
    ];

    for (var i = 0; i < TASKS.length; i++) {
        var task = TASKS[i];
        if (task.name) {
            process.stdout.write(task.name + ': ' + task.description);
        }
        process.stderr.write('\n');
    }

    process.stderr.write('\n');
};