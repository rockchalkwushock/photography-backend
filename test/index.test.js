import mongoose from 'mongoose';
import { expect } from 'chai';
import request from 'supertest';
import { server } from '../api'; // server = http:localhost:8000

expect();

describe('API Tests', () => {
  let token;
  it('expects a JWT token to return on signup', (done) => {
    request(server)
      .post('/api/v1/signup')
      .send({ email: 'bill@gmail.com', password: '123' })
      .then(res => {
        const { message, success, user } = res.body;
        token = res.body.token;
        expect(res.statusCode).to.equal(201);
        expect(success).to.equal(true);
        expect(message).to.equal('Successfully Registerd');
        expect(token).to.be.a('string');
        expect(token).to.contain('JWT');
        expect(user).to.be.a('object');
        done();
      })
      .catch(err => done(err));
  });
  it('expects a JWT token to return on login', (done) => {
    request(server)
      .post('/api/v1/login')
      .send({ email: 'bill@gmail.com', password: '123' })
      .then(res => {
        const { success, user } = res.body;
        token = res.body.token;
        expect(res.statusCode).to.equal(201);
        expect(success).to.equal(true);
        expect(token).to.be.a('string');
        expect(token).to.contain('JWT');
        expect(user).to.be.a('object');
        done();
      })
      .catch(err => done(err));
  });
  it('expects authenticated user for access', (done) => {
    request(server)
      .get('/api/v1/admin')
      .set('Authorization', token)
      .then(res => {
        const { message } = res.body;
        expect(res.statusCode).to.equal(200);
        expect(message).to.equal('Hello World!');
        expect(token).to.be.a('string');
        expect(token).to.contain('JWT');
        done();
      })
      .catch(err => done(err));
  });
  after((done) => {
    const { users } = mongoose.connection.collections;
    users.drop(done);
  });
});
