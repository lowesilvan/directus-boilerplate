### Headless CMS - Directus + postgres + redis 
- + here mpas extensions for directus

## Getting Started
**Perequisites:
- make sure you have docker installed locally
- make sure you have docker-compose installed locally
- make sure you have task installed locally
-
# How to run with docker locally
- Clone this directus repository.
- run `cd directus` to route into the directus directory.
- in the directus directory, run `task extensions:build:run` to spin-up Directus at `localhost:8055/admin/login`

## How to work with directus schema updates

On startup, `directus` executes the script `./directus/schema/start.sh` updating the schema to the snapshot in `./directus/schema/snapshot.yaml`.

If you want to *export* a directus schema, you can use the `docker exec directus sh ./schema/export.sh` script. It saves the directus schema to `./directus/schema/snapshot.yaml`. Docker-compose has to be up and running.

```bash
docker exec directus sh ./schema/export.sh
```

If you want to *import* a directus schema, you can use the `docker exec directus sh ./schema/import.sh` script. It loads the directus schema from `./directus/schema/snapshot.yaml`. Docker-compose has to be up and running.

```bash
docker exec directus sh ./schema/import.sh
```
When you're ready, push your updated snapshot file to the main branch.

Then trigger the `CI` Workflow in Githaub actions to build new directus image with the updated schema & extensions.

## Folder Structuring Explained

- `./directus/schema` contains schema files
- `./directus/data` contains all postgres database files
- `./directus/uploads` contains all media files uploaded in directus
- `./directus/extensions` conatins all directus extenstions
- `./directus/logs` all in-app logs generated
- `./directus/db/backup` contains generated database backup