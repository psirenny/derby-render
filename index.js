var merge = require('merge');
var Model = require('racer/lib/Model');
var templates = require('derby-templates');

module.exports = function (app, opts) {
  if (!opts) opts = {};
  if (!opts.global) opts.global = {};
  if (!opts.view) opts.view = 'Page';
  var meta = new templates.contexts.ContextMeta({});
  return function (ns, data) {
    if (typeof ns === 'object') { data = ns; ns = null; }
    if (!data) data = {};
    var prefix = ns ? (ns + ':') : '';
    var render = {$render: {prefix: prefix}};
    var model = new Model();
    model.data = merge(render, opts.global, data);
    var controller = merge({model: model}, app.proto);
    var ctx = new templates.contexts.Context(meta, controller);
    ctx.meta.views = app.views;
    var view = app.views.find(opts.view);
    if (!view) return '';
    return view.get(ctx);
  };
};
