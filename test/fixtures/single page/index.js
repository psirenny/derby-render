var fs = require('fs');
var path = require('path');
exports.app = require('./app');
exports.expected = {};
exports.expected.index = fs.readFileSync(path.join(__dirname, 'expected/index.html'), 'utf8').trim();
exports.expected.body = fs.readFileSync(path.join(__dirname, 'expected/body.html'), 'utf8').trim();
