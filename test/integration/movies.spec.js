import request from 'supertest';
import { server } from '../../src/server';

describe('Movies', () => {
  it('should return a movie list by search string', async () => {
    const response = await request(server).get('/movies?search=star');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('movies');
  });
});
