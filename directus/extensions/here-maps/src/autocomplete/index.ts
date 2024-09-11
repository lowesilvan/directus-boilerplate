import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'repareo.here-maps.autocomplete',
	name: 'Here-Maps Autocomplete',
	icon: 'box',
	description: 'Auto-complete input field using Here-Maps API',
	component: InterfaceComponent,
	options: [
		{
			field: "placeholder",
			type: "string",
			name: "Placeholder",
			meta: {
				width: 'full',
				interface: 'input',
			}
		},
		{
			field: "street_ref",
			type: "string",
			name: "Street Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "state_ref",
			type: "string",
			name: "State Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "county_ref",
			type: "string",
			name: "County Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "country_ref",
			type: "string",
			name: "Country Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "city_ref",
			type: "string",
			name: "City Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "district_ref",
			type: "string",
			name: "District Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "postcode_ref",
			type: "string",
			name: "Postcode Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "countryCode_ref",
			type: "string",
			name: "CountryCode Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "locationId_ref",
			type: "string",
			name: "LocationID Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "latitude_ref",
			type: "string",
			name: "Latitude Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "longitude_ref",
			type: "string",
			name: "Longitude Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
		{
			field: "point_ref",
			type: "string",
			name: "Map Point Ref",
			meta: {
				width: 'half',
				interface: 'input',
			}
		},
	],
	types: ['json'],
});
