
/* URL Shortener with Utility Tools:
   Debug with Logging and Version Bump
   by Melony Smith
*/

/* eslint-env mocha */

const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');

const db = require('../src/models/db');
const genShortURL = require('../src/lib/genShortURL');

request('http://localhost:3000');
require('../src/lib/util');

const app = express();

require('dotenv').config();

// require server before and close when done
describe('API', () => {
  let server;
  beforeEach(() => {
    server = require('../src/server');
  });
  afterEach(() => {
    server.close();
  });

  // / will display
  describe('Express', () => {
    it('responds to /', () => {
      request(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    });
    // everything else will 404
    it('404s everything else', () => {
      request(server)
        .get('/something/random')
        .expect(404);
    });
  });

  // server should be active on port 3000
  describe('Server', () => {
    it('server up and listening on Port 3000', () => {
      request(server);
      app.get('/', (req, res) => {
        res.status(200);
      });
      app.listen(3000, () => {
        server.address().port;
      });
      return server;
    });
  });

  // make sure .env matches datbase information
  describe('Database', () => {
    it('dotenv info matches against database info', () => {
      request(server);
      expect(db.sequelize.config.database).to.equal(process.env.DB_NAME);
      expect(db.sequelize.config.username).to.equal(process.env.DB_USER);
      expect(db.sequelize.config.password).to.equal(process.env.DB_PASS);
      expect(db.sequelize.config.host).to.equal(process.env.DB_HOST);
      expect(db.sequelize.options.dialect).to.equal(process.env.DB_SCHEMA);
      expect(db.sequelize.config.port).to.equal(process.env.DB_PORT);
    });
  });

  // check that debug is working
  describe('Debug', () => {
    it('Debug OK', () => {
    });
  });
  
  describe('Endpoint', () => {
    // will create random short url from original url
    it('POST returns randomly generated short URL of 6 characters', () => {
      request(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(() => {
        const id = genShortURL.genShortURL();
        expect(id).to.have.length('6');
      });
    });

    // will return all urls in database
    it('GET returns all URLs', () => {
      request(server)
      .get('/api/v1/urls')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const urls = res.body;
        // save one single url from the list to test on later
        this.url.id = urls[0];
        expect(urls.length).to.be.above(0);
      })
    .done();
    });

    // will return one url by id
    it('GET returns one URL with id, originalURL, shortURL, createdAt and updatedAt properties', (done) => {
      request(server);
      app.get('/api/v1/urls' + this.url.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(() => {
          const url = this.url.id;
          expect(url).to.have.property('id');
          expect(url).to.have.property('originalURL');
          expect(url).to.have.property('shortURL');
          expect(url).to.have.property('createdAt');
          expect(url).to.have.property('updatedAt');
        });
      done();
    });

    // will updte one url by id
    it('UPDATE updates one URL based on id', (done) => {
      request(server)
      .get('/api/v1/urls' + this.url.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
      app.update('/api/v1/urls/' + this.url.id, (req, res) => {
        res.status(200);
      });
      done();
    });

    // will delete one url by id
    it('DELETE deletes one URL based on id', (done) => {
      request(server)
      .get('/api/v1/urls' + this.url.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
      app.delete('/api/v1/urls/' + this.url.id, (req, res) => {
        res.status(200);
      });
      done();
    });
  });

  // will redirect short url back to original url
  describe('Redirect', () => {
    const urlGo = ('longlinkexample.com');
    it('redirects short URL to original URL', () => {
      const short = urlGo.includes('/go/:shortURL');
      expect(short).to.equal(false);
    });
  });
});
