import mongoose from 'mongoose';
// import _ from 'lodash';
// import faker from 'faker';
import { expect } from 'chai';
import request from 'supertest';
// import Photo from '../api/modules';
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
  it('expects a 422 if no email is provided', (done) => {
    request(server)
      .post('/api/v1/signup')
      .send({ email: '', password: '123' })
      .then(res => {
        const { message, success } = res.body;
        expect(res.statusCode).to.equal(422);
        expect(success).to.equal(false);
        expect(message).to.equal('Email is required!');
        done();
      })
      .catch(err => done(err));
  });
  it('expects a 422 if no password is provided', (done) => {
    request(server)
      .post('/api/v1/signup')
      .send({ email: 'tony@gmail.com', password: '' })
      .then(res => {
        const { message, success } = res.body;
        expect(res.statusCode).to.equal(422);
        expect(success).to.equal(false);
        expect(message).to.equal('Password is required!');
        done();
      })
      .catch(err => done(err));
  });
  it('expects a 422 if invalid email is provided', (done) => {
    request(server)
      .post('/api/v1/signup')
      .send({ email: 'yankeedoodle', password: '123' })
      .then(res => {
        const { message, success } = res.body;
        expect(res.statusCode).to.equal(422);
        expect(success).to.equal(false);
        expect(message).to.equal('Email is not valid!');
        done();
      })
      .catch(err => done(err));
  });
  it('expects a 422 if email provided is already in use', (done) => {
    request(server)
      .post('/api/v1/signup')
      .send({ email: 'bill@gmail.com', password: '123' })
      .then(res => {
        const { message, success } = res.body;
        expect(res.statusCode).to.equal(422);
        expect(success).to.equal(false);
        expect(message).to.equal('Email already used!');
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
  it('expects a current JWT', (done) => {
    request(server)
      .post('/api/v1/checkToken')
      .send({ token })
      .then(res => {
        const { message, success, user } = res.body;
        expect(res.statusCode).to.equal(201);
        expect(success).to.equal(true);
        expect(message).to.equal('JWT Refreshed.');
        expect(token).to.be.a('string');
        expect(token).to.contain('JWT');
        expect(user).to.be.a('object');
        done();
      })
      .catch((err) => done(err));
  });
  it('expects a 401 if no JWT present', (done) => {
    request(server)
      .post('/api/v1/checkToken')
      .send({ token: '' })
      .then(res => {
        const { message, success } = res.body;
        expect(res.statusCode).to.equal(401);
        expect(success).to.equal(false);
        expect(message).to.equal('Must have JWT.');
        done();
      })
      .catch((err) => done(err));
  });
  it('expects a 422 if JWT cannot be verified', (done) => {
    request(server)
      .post('/api/v1/checkToken')
      .send({ token: 'JWT' })
      .then(res => {
        const { message, success } = res.body;
        expect(res.statusCode).to.equal(422);
        expect(success).to.equal(false);
        expect(message).to.equal('JWT Verification Issue.');
        done();
      })
      .catch((err) => done(err));
  });
  // Not passing in Travis CI but passed locally????
  it.skip('expects a 401 if decode does not return a valid user', (done) => {
    const faultyToken = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ODY3ZTMzMTc1NmE0ZDFiYzkyZWVmNzEiLCJpYXQiOjE0ODMyMDMzNzgsImV4cCI6MTQ4MzIwNjk3OH0.tWupPEW8u66Bdxtn_LSMUuhDUUx4WHsfxudFjJyfKxU'; // eslint-disable-line
    request(server)
      .post('/api/v1/checkToken')
      .send({ token: faultyToken })
      .then(res => {
        const { message, success } = res.body;
        expect(res.statusCode).to.equal(401);
        expect(success).to.equal(false);
        expect(message).to.equal('JWT Refresh Issue.');
        done();
      })
      .catch((err) => done(err));
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
  it('expects an array of objects upon front-end request', (done) => {
    request(server)
      .get('/api/v1/library')
      .set('Authorization', token)
      .then(
        res => {
          const { payload, success } = res.body;
          expect(res.statusCode).to.equal(201);
          expect(success).to.equal(true);
          expect(payload).to.be.a('array');
          done();
        },
        err => {
          const { message, success } = err.res.body;
          expect(err.res.statusCode).to.equal(500);
          expect(success).to.equal(false);
          expect(message).to.equal(err);
          done();
        }
      );
  });
  after((done) => {
    const { users } = mongoose.connection.collections;
    users.drop(done);
  });
});
