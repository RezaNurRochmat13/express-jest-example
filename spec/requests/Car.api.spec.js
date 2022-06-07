const request = require('supertest');
const assert = require('assert');
const app = require("../../app/index.js");
const dotenv = require('dotenv')
dotenv.config();

describe('test index api', () => {
    it('return 200 ok', (done) => {
        request(app)
        .get("/")
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    });
});

describe('test api cars', () => {
    it('return 200 ok', (done) => {
        request(app)
        .get("/v1/cars")
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    });
});