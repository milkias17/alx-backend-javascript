const { expect } = require('chai');
const request = require('request');

describe('test index', function () {
  beforeEach(function () {
    this.timeout(0);
  });

  it('has proper status code', function (done) {
    request.get('http://127.0.0.1:7865/', function (error, response) {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  });

  it('has the proper content', function (done) {
    request.get('http://127.0.0.1:7865/', function (error, response, body) {
      if (error) {
        done(error);
      }
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('test cart route', function () {
  beforeEach(function () {
    this.timeout(0);
  });

  it('has proper status code and body with correct input', function (done) {
    request.get('http://127.0.0.1:7865/cart/20', function (error, response, body) {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 20');
      done();
    });
  });

  it('has the proper status code with wrong input', function (done) {
    request.get('http://127.0.0.1:7865/cart/hello', function (error, response) {
      expect(response.statusCode).to.be.equal(404);
      done(error);
    });
  });
});
