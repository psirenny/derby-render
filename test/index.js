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
    it('page view should return expected html', function (done) {
      var render = lib(fixtures.singlePage.app);
      render(function (err, html) {
        html.should.be.a('string');
        html.should.eql(fixtures.singlePage.expected.index);
        done();
      });
    });
  });

  describe('multi page app', function () {
    it('empty namespace should return expected html', function (done) {
      var render = lib(fixtures.multiPage.app);
      render(function (err, html) {
        html.should.be.a('string');
        html.should.eql(fixtures.multiPage.expected.index);
        done();
      });
    });

    it('non-empty namespace should return expected html', function (done) {
      var render = lib(fixtures.multiPage.app);
      render('baz', function (err, html) {
        html.should.be.a('string');
        html.should.eql(fixtures.multiPage.expected.baz);
        done();
      });
    });
  });

  describe('data binding', function () {
    it('local data should return expected html', function (done) {
      var render = lib(fixtures.dataBinding.app);
      var data = {_page: {foo: 'foo', bar: 'bar'}};
      render(data, function (err, html) {
        html.should.be.a('string');
        html.should.eql(fixtures.dataBinding.expected);
        done();
      });
    });

    it('global data should return expected html', function (done) {
      var opts = {data: {_page: {foo: 'foo'}}};
      var data = {_page: {bar: 'bar'}};
      var render = lib(fixtures.dataBinding.app, opts);
      render(data, function (err, html) {
        html.should.be.a('string');
        html.should.eql(fixtures.dataBinding.expected);
        done();
      });
    });
  });

  describe('view function', function () {
    it('should return expected html', function (done) {
      var render = lib(fixtures.viewFunction.app);
      var html = render(function (err, html) {
        html.should.be.a('string');
        html.should.eql(fixtures.viewFunction.expected);
        done();
      });
    });
  });
});
