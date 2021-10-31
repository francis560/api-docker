const request = require('supertest');
const app = require('../server');


describe("Peticion GET /api/users", () => {
    it ('Esto deberia responder con una lista de todos los usuarios', done => {
        request(app)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });    
});


describe("Peticion GET /api/posts" , () => {
    it ('Esto deberia responder con una lista de todos los posts', done => {
        request(app)
            .get('/api/posts')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });
});


describe("Peticion GET /api/comments", () => {
    it ('Esto deberia responder con una lista de todos los comentarios', done => {
        request(app)
            .get('/api/comments')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });
});


describe("Peticion GET /api/images", () => {
    it ('Esto deberia responder con una lista de todos las imagenes', done => {
        request(app)
            .get('/api/images')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });
});