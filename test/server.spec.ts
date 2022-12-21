import createServer from '@src/app';
import request from 'supertest';
import { Express } from 'express-serve-static-core';

let server: Express;
beforeAll(async () => {
  server = createServer();
});

describe('GET /', () => {
  it('should return 200', async () => {
    await request(server).get(`/`).expect(404);
  });
});
