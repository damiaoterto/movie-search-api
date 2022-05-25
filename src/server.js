import { createServer } from 'node:http';
import { handler } from './handler';

const server = createServer(handler);

export { server };
