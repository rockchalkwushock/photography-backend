import 'dotenv-safe/config';
import mongoose from 'mongoose';
import { expect } from 'chai';
import request from 'supertest';
import { Photo } from '../api/modules';
import { server } from '../api';

expect();

describe('API Tests', () => {
  let collection;
  let token;
  before((done) => {
    collection = [];
    const img = new Photo({
      public_id: 'a1b2c3d45e',
      thumbnail_url: 'http://mycustomthumbnailurl.com/thumbnailhere',
      url: 'http://image.com/yourimageishere'
    });
    collection.push(img);
    done();
  });
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
  it('expects an array of objects upon front-end request', (done) => {
    request(server)
      .get('/api/v1/library', { collection })
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
  it('expects an array of objects from the front-end', (done) => {
    request(server)
      .post('/api/v1/library')
      .set('Authorization', token)
      .send({ result: [
        { public_id: 'edih3h5ukohotwr6rp38' },
        { public_id: 'eabc3h5ukohotwr6rp38' },
        { public_id: 'edef3h5ukohotwr6rp38' }
      ] })
      .then(
        res => {
          const { cloudinary, message, success } = res.body;
          expect(res.statusCode).to.equal(201);
          expect(success).to.equal(true);
          expect(message).to.equal('Successfully added to database.');
          expect(cloudinary).to.be.a('array');
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
  it('expects a 422 if token has expired', (done) => {
    setTimeout(() => {
      request(server)
        .post('/api/v1/checkToken')
        .send({ token })
        .then(res => {
          const { expireTime, message, success } = res.body;
          expect(res.statusCode).to.equal(422);
          expect(success).to.equal(false);
          expect(expireTime).to.equal(true);
          expect(message).to.equal(
            'JWT has expired. Please login again, this is for your security!');
          done();
        })
        .catch((err) => done(err));
    }, 1500);
  });
  after((done) => {
    const { photos, users } = mongoose.connection.collections;
    photos.drop(() => {
      users.drop(() => {
        done();
      });
    });
  });
});
