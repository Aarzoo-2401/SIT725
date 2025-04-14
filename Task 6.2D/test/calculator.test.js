// test/calculator.test.js
const expect = require("chai").expect;
const request = require("request");

describe("Sum Calculator API", function () {
  const baseUrl = "http://localhost:3000";

  it("should return status 200 on root route", function (done) {
    request(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct sum for valid numbers", function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("15");
      done();
    });
  });

  it("should return error for missing parameter 'b'", function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should return error for non-numeric input", function (done) {
    request.get(`${baseUrl}/add?a=hello&b=5`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  // NEW TEST CASES

  it("should return correct sum for negative numbers", function (done) {
    request.get(`${baseUrl}/add?a=-5&b=-10`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("-15");
      done();
    });
  });

  it("should return correct sum for decimal numbers", function (done) {
    request.get(`${baseUrl}/add?a=2.5&b=3.7`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("6.2");
      done();
    });
  });

  it("should return correct sum for large numbers", function (done) {
    request.get(`${baseUrl}/add?a=1000000000&b=2000000000`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("3000000000");
      done();
    });
  });

  it("should return error for missing parameter 'a'", function (done) {
    request.get(`${baseUrl}/add?b=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should return error when both parameters are missing", function (done) {
    request.get(`${baseUrl}/add`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should return correct sum when both parameters are zero", function (done) {
    request.get(`${baseUrl}/add?a=0&b=0`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("0");
      done();
    });
  });
});
