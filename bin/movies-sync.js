import 'dotenv/config';
import https from 'node:https';
import { mailiSearch } from '../src/lib/meilisearch';

function getMovies() {
  return new Promise((resolve, reject) => {
    https.get(process.env.MOVIES_DATASET, (resp) => {
      let data = '';

      console.log('Fetching movies...');

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function syncMovies(movies) {
  console.log('Syncing movies...');

  const client = mailiSearch();
  await client.index('movies').addDocuments(movies)
}

async function main() {
  try {
    const movies = await getMovies();
    await syncMovies(movies);
    process.exit(0);
  } catch (err) {
    console.error(`error syncing movies: ${err}`);
    process.exit(1);
  }
}
main();
