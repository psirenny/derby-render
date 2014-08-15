var fs = require('fs');
var path = require('path');
exports.app = require('./app');
exports.expected = {};
exports.expected.index = fs.readFileSync(path.join(__dirname, 'expected/index.html'), 'utf8').trim();
exports.expected.baz = fs.readFileSync(path.join(__dirname, 'expected/baz.html'), 'utf8').trim();
