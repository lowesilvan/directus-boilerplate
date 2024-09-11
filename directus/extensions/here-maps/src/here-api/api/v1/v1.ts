import {HereApiInterface} from "../here-api-interface";
import {GeocodeResponse} from "./ressources/responses/geocode-response";

export class V1 implements HereApiInterface {
    private readonly baseURL: string;
    private readonly apiKey: string;

    constructor(baseURL: string, apiKey: string) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }

    async getAutocompleteSuggestions(query: string): Promise<GeocodeResponse> {
        const url = `${this.baseURL}v1/geocode?apiKey=${this.apiKey}&q=${query}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    }
}