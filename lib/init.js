var path = require('path');
var shelljs = require('shelljs');

var init = function () {

    var p = path.join(__dirname, '..', 'template/*'); //ԭ·��

    shelljs.cp('-R', p, './');
    
};


exports.generateTemplate = init;