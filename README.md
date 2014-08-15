Derby Render
============

Provides a render function for [Derby JS](http://derbyjs.com) apps that returns html for a given namespace.  
It more or less behaves similarly to `app.page.render(namespace)`.

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
    var html = render();

    // use a namespace, such as "app.page.render('page1')"
    html = render('page1');

    // load data in the page
    html = render('page2', {year: 2015});

Options
-------

You can configure the render function by passing in an options object in addition to the app:

**global** – Global data to apply to each render call.
**view** – Default view to use. Defaults to `'Page'`.
