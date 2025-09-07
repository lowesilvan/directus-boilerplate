FROM directus/directus:11.11.0

MAINTAINER Lowe Mbonda

COPY schema /directus/schema/
COPY extensions /directus/extensions
COPY templates/email /templates

CMD ["sh", "./schema/start.sh"]