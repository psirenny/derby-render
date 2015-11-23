'use strict';

var _ = require('lodash');

module.exports = function (app, opts) {
  if (!opts) opts = {};
  if (!opts.data) opts.data = {};
  if (!opts.ns) opts.ns = 'Page';

  return function (ns, data, cb) {
    if (typeof ns === 'object') {cb = data; data = ns; ns = opts.ns;}
    else if (typeof data === 'function') {cb = data; data = {};}
    else if (typeof ns === 'function') {cb = ns; data = {}; ns = opts.ns;}

    var req = {};
    var res = {send: function (html) {cb(null, html)}};
    var page = app.createPage(req, res);
    data = _.merge({}, opts.data, data || {});

    _.each(data, function (docs, coll) {
      if (coll[0] !== '$' && coll[0] !== '_') return;
      _.each(docs, function (doc, docId) {
        page.model.set(coll + '.' + docId, doc);
      });
    });

    page.renderStatic(200, ns);
  };
};
