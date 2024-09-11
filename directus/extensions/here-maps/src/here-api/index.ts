import { defineEndpoint } from '@directus/extensions-sdk';
import {V1} from "./api/v1/v1";

export default defineEndpoint((router, context) => {
	router.get('/autocomplete', async function(req, res) {
		const api = new V1(context.env.HERE_GEOCODE_API_URL,context.env.HERE_API_KEY);

		const result = await api.getAutocompleteSuggestions(req.query['query']?.toString() ?? '');

		return res.json(result);
	} );
});
