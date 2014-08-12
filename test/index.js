var email = require('../lib');
var should = require('chai').should();

describe('derby-email', function () {
  it('should be a function', function () {
    email.should.be.a('function');
  });
});
