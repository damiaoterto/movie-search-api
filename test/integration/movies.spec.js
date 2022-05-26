import request from 'supertest';
import { server } from '../../src/server';

jest.setTimeout(30000);

describe('Movies Search' , () => {
  it('should return not found message', async () => {
    const response = await request(server).get('/');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Not Found');
  });

  it('should return a movie list by search string', async () => {
    const response = await request(server).get('/movies?search=star');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.movies.hits)).toBe(true);
    expect(response.body).toHaveProperty('movies');
  });
});
