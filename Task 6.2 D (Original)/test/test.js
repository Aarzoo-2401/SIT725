const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // or server.js based on your export

chai.use(chaiHttp);
const { expect } = chai;

// Example of a basic API test
describe('Basic Test', function() {
  it('should work with chai-http', function(done) {
    chai.request('http://www.google.com')
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
