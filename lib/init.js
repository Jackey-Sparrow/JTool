var fs = require('fs');

var path = require('path');
var shelljs = require('shelljs');

var init = function () {

    var p = path.join(__dirname, '..', 'template/*'); //Ô­Â·¾¶

    shelljs.cp('-R', p, './');//ok
    
};


exports.init = init;