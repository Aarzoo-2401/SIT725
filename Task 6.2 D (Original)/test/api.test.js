const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // or server.js based on your export

chai.use(chaiHttp);
const { expect } = chai;


describe('API Tests - Projects', () => {
  it('should return all projects', (done) => {
    chai.request(app)
      .get('/api/projects') // Replace with your actual endpoint
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
        done();
      });
  });

  it('should handle 404 for non-existing route', (done) => {
    chai.request(app)
      .get('/api/nonexistent') // Non-existent route to test 404
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
