import querystring from 'node:querystring';
import { mailiSearch } from './lib/meilisearch';

export const handler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url.includes('/movies')) {
    const [_, query] = req.url.split('?');
    const { search } = querystring.parse(query);
    const client = mailiSearch();

    const movies = await client.index('movies').search(search);

    res.writeHead(200);
    res.end(JSON.stringify({ movies }));

    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ statusCode: 404, message: 'Not Found' }));
}
