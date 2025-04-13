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
});
