## Resume
A simple movie search using the **meilisearch** engine.

## Features
- Search-as-you-type experience (answers < 50 milliseconds)
- Full-text search
- Typo tolerant (understands typos and misspelling)
- Faceted search and filters

**learn more:** [Meilisearch](https://www.meilisearch.com/)

## Start Project

### create the environments vars
create or copy ``.env`` file using ``cp env-example .env``

```
MEILISEARCH_HOST=mailisearch
MEILISEARCH_PORT=7700

MOVIES_DATASET=https://docs.meilisearch.com/movies.json
```

### Install dependencies

```
# using npm
npm install

# using yarn
yarn install
```

### Run docker containers

```
docker-compose up -d --build
```
