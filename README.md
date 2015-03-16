Derby Render
============

Provides a render function for [Derby JS](http://derbyjs.com) apps that returns html for a given namespace, behaving more or less like `app.page.render(namespace)`.

Version 2.0
-----------

The following changes were made because of changes in derby:
* Html is now returned asynchronously via a callback function.
* Context data is no longer supported. You must pass model data with a collection and document Id.
* **global** and **view** properties are renamed to **data** and **ns** respectively, to reduce confusion.

[![Build Status](https://travis-ci.org/psirenny/derby-render.png?branch=master)](https://travis-ci.org/psirenny/derby-render)

Installation
------------

    $ npm install derby-render --save

Usage
-----

    var derby = require('derby');
    var app = derby.createApp('app', __filename);
    var render = require('derby-render')(app);
    app.loadViews(...);
    app.proto.foo = ...;
    app.proto.bar = ...;

    // output the html loaded by "app.page.render()"
    render(function (err, html) {
      ...
    });

    // specify a namespace
    render('about', function () {
      ...  
    });

    // pass in model data
    var data = {_page: {year: 2015}};
    render(data, function (err, html) {
      ...  
    });

    // or specify a namespace and data
    render('about', data, function (err, html) {
      ...  
    });

Options
-------

You can configure the render function by passing in an options object in addition to the app:

**data** – Global model data applied to each render call.

**ns** – Default namespace for each render call. Defaults to `'Page'`.
