import { expect } from 'chai';
import request from 'supertest';
import { app } from '../api';

expect();

describe('API Tests', () => {
  it('description', (done) => {
    request(app)
      .get('/api/v1')
      .then(res => {
        expect(res.statusCode).to.equal(200);
        done();
      })
      .catch(err => done(err));
  });
});

// This is a test becasue npm was being a little bitch!
