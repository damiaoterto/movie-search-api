import { MeiliSearch } from 'meilisearch';
import config from '../config/meilisearch-config';

export const mailiSearch = () => {
  const client = new MeiliSearch({ host: `http://${config.host}:${config.port}` });
  return client;
}
