var merge = require('merge');
var templates = require('derby-templates');

module.exports = function (app, opts) {
  if (!opts) opts = {};
  if (!opts.view) opts.view = 'Page';
  var meta = new templates.contexts.ContextMeta({});
  return function (ns, data) {
    if (!data) data = {};
    var prefix = ns ? (ns + ':') : '';
    var render = {$render: {prefix: prefix}};
    var model = {data: merge(render, data)};
    var controller = merge({model: model}, app.proto);
    var ctx = new templates.contexts.Context(meta, controller);
    ctx.meta.views = app.views;
    var view = app.views.find(opts.view);
    if (!view) return '';
    return view.get(ctx);
  };
};
