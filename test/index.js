var app = require('./fixture/app');
var render = require('..');
var should = require('chai').should();

describe('derby-render', function () {
  it('should be a function', function () {
    render.should.be.a('function');
  });

  it('should return a render function', function () {
    var fn = render(app);
    fn.should.be.a('function');
  });

  it('should work', function () {
    var fn = render(app);
    console.log(fn());
  });
});
