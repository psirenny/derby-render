var fs = require('fs');
var path = require('path');
exports.app = require('./app');
exports.expected = fs.readFileSync(path.join(__dirname, 'expected/index.html'), 'utf8').trim();
