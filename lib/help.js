/**
 * Created by Jackey Li on 2016/7/26.
 */
module.exports = function printHelpLines() {

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