#!/bin/sh
npm exec directus bootstrap
npx directus schema apply --yes ./schema/snapshot.yaml
npm exec directus start