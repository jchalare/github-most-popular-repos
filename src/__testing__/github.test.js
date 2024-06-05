const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  test('responds with JSON containing the top 10 repositories of user "google"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(10);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('description');
    expect(response.body[0]).toHaveProperty('stars');
    expect(response.body[0]).toHaveProperty('url');
  });
});


describe('GET /custom-top-repositories', () => {
  test('responds with JSON containing custom top repositories from a custom user ', async () => {
    const response = await request(app).get('/?user=jchalare&reposToShow=5');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(5);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('description');
    expect(response.body[0]).toHaveProperty('stars');
    expect(response.body[0]).toHaveProperty('url');
  });
});



describe('GET /invalid-route', () => {
  test('responds with 404 status code', async () => {
    const response = await request(app).get('/invalid-route');
    expect(response.statusCode).toBe(404);
      });
});