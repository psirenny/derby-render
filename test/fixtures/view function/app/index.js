var derby = require('derby');
var merge = require('merge');
var viewFns = require('./viewFns');
var app = module.exports = derby.createApp('client', __filename);
app.loadViews(__dirname);
app.proto = merge(app.proto, viewFns);
