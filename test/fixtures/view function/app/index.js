var _ = require('lodash');
var derby = require('derby');
var viewFns = require('./viewFns');
var app = module.exports = derby.createApp('client', __filename);
app.loadViews(__dirname);
app.proto = _.merge(app.proto, viewFns);
