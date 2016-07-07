#!/usr/bin/env node

var lib = require('../lib/index.js');
var greeting = lib.sayHello('Jackey');

console.log(greeting);