import {GeocodeResponse} from "./v1/ressources/responses/geocode-response";

export interface HereApiInterface {
    getAutocompleteSuggestions(query: string): Promise<GeocodeResponse>;
}