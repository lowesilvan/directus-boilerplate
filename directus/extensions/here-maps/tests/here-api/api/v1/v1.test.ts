import {expect, vi, it, describe, beforeEach} from 'vitest';
import {GeocodeResponse} from "../../../../src/here-api/api/v1/ressources/responses/geocode-response";
import {V1} from "../../../../src/here-api/api/v1/v1";
import {testGeocodeResponse} from "./test-response";
import createMocker from "vitest-fetch-mock";

const fetchMocker = createMocker(vi);

// adds the 'fetchMock' global variable and rewires 'fetch' global to call 'fetchMock' instead of the real implementation
fetchMocker.enableMocks();

// changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
fetchMocker.dontMock();

beforeEach(() => {
    fetchMocker.doMock();
});

describe('V1', () => {
    it('should fetch geocode autocomplete successfully', async () => {
        const suggestions: GeocodeResponse = testGeocodeResponse;
        fetchMocker.mockResponseOnce(JSON.stringify(suggestions));

        const v1 = new V1("https://localhost:8080/", "test");
        const result = await v1.getAutocompleteSuggestions("Berlin");

        expect(result).toEqual(suggestions);
    })
})
