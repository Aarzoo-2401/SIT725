// test/calculator.test.js
const expect = require("chai").expect;
const request = require("request");

describe("Calculator API", function () {
  const baseUrl = "http://localhost:3000";

  // Root Route
  it("should return status 200 on root route", function (done) {
    request(baseUrl, function (error, response, body) {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // ADDITION
  describe("Addition", () => {
    it("should return correct sum for valid numbers", function (done) {
      request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("15");
        done();
      });
    });

    it("should return correct sum for decimals", function (done) {
      request.get(`${baseUrl}/add?a=2.5&b=3.5`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("6");
        done();
      });
    });

    it("should return error for missing parameter 'b'", function (done) {
      request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.not.equal(200);
        done();
      });
    });
  });

  // SUBTRACTION
  describe("Subtraction", () => {
    it("should return correct difference", function (done) {
      request.get(`${baseUrl}/subtract?a=10&b=4`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("6");
        done();
      });
    });

    it("should return error for non-numeric input", function (done) {
      request.get(`${baseUrl}/subtract?a=abc&b=1`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.not.equal(200);
        done();
      });
    });
  });

  // MULTIPLICATION
  describe("Multiplication", () => {
    it("should return correct product", function (done) {
      request.get(`${baseUrl}/multiply?a=3&b=5`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("15");
        done();
      });
    });

    it("should return correct product for decimals", function (done) {
      request.get(`${baseUrl}/multiply?a=2.5&b=2`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("5");
        done();
      });
    });
  });

  // DIVISION
  describe("Division", () => {
    it("should return correct quotient", function (done) {
      request.get(`${baseUrl}/divide?a=10&b=2`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("5");
        done();
      });
    });

    it("should return error for divide by zero", function (done) {
      request.get(`${baseUrl}/divide?a=5&b=0`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(400);
        expect(body).to.include("Cannot divide by zero");
        done();
      });
    });

    it("should return error for non-numeric input", function (done) {
      request.get(`${baseUrl}/divide?a=abc&b=1`, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.not.equal(200);
        done();
      });
    });
  });
});
