var derby = require('derby');
var merge = require('merge');
var path = require('path');
var viewFns = require('./viewFns');
var app = derby.createApp('client', __filename);

app.loadViews(path.join(__dirname, 'views'));
app.proto = merge(app.proto, viewFns);

module.exports = app;
