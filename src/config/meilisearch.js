import env from 'env-var';

export default {
  host: env.get('MEILISEARCH_HOST').required().asString(),
  port: env.get('MEILISEARCH_PORT').required().asPortNumber(),
}
