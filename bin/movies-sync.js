import 'dotenv/config';
import axios from 'axios';
import { mailiSearch } from '../src/lib/meilisearch';

axios.defaults.timeout = 30000;

async function getMovies() {
  console.log('Getting movies...');
  const { data } = await axios.get(process.env.MOVIES_DATASET);
  return data;
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
