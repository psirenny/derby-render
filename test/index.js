var fixtures = require('./fixtures');
var lib = require('..');
var should = require('chai').should();

describe('derby-render', function () {
  it('should be a function', function () {
    lib.should.be.a('function');
  });

  it('should return a render function', function () {
    var render = lib(fixtures.singlePage.app);
    render.should.be.a('function');
  });

  describe('single page app', function () {
    it('page should return expected html', function () {
      var render = lib(fixtures.singlePage.app);
      var html = render();
      html.should.be.a('string');
      html.should.eql(fixtures.singlePage.expected.index);
    });

    it('body should return expected html', function () {
      var opts = {view: 'Body'};
      var render = lib(fixtures.singlePage.app, opts);
      var html = render();
      html.should.be.a('string');
      html.should.eql(fixtures.singlePage.expected.body);
    });
  });

  describe('multi page app', function () {
    it('empty namespace should return expected html', function () {
      var render = lib(fixtures.multiPage.app);
      var html = render();
      html.should.be.a('string');
      html.should.eql(fixtures.multiPage.expected.index);
    });

    it('non-empty namespace should return expected html', function () {
      var render = lib(fixtures.multiPage.app);
      var html = render('baz');
      html.should.be.a('string');
      html.should.eql(fixtures.multiPage.expected.baz);
    });
  });

  describe('data binding', function () {
    it('local data should return expected html', function () {
      var render = lib(fixtures.dataBinding.app);
      var data = {foo: 'foo', bar: 'bar'};
      var html = render(data);
      html.should.be.a('string');
      html.should.eql(fixtures.dataBinding.expected);
    });

    it('global data should return expected html', function () {
      var opts = {global: {foo: 'foo'}};
      var data = {bar: 'bar'};
      var render = lib(fixtures.dataBinding.app, opts);
      var html = render(data);
      html.should.be.a('string');
      html.should.eql(fixtures.dataBinding.expected);
    });
  });

  describe('view function', function () {
    it('should return expected html', function () {
      var render = lib(fixtures.viewFunction.app);
      var html = render();
      html.should.be.a('string');
      html.should.eql(fixtures.viewFunction.expected);
    });
  });
});
