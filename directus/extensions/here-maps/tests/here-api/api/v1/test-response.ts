import {GeocodeResponse} from "../../../../src/here-api/api/v1/ressources/responses/geocode-response";

export const testGeocodeResponse: GeocodeResponse = {
    suggestions: [
        {
            title: "Central Park",
            id: "1",
            politicalView: "Neutral",
            resultType: "landmark",
            houseNumberType: "numerical",
            addressBlockType: "street",
            localityType: "urban",
            administrativeAreaType: "municipality",
            address: {
                label: "Central Park, New York, NY, USA",
                countryCode: "US",
                countryName: "United States",
                stateCode: "NY",
                state: "New York",
                countyCode: "NYC",
                county: "New York",
                city: "New York",
                district: "Manhattan",
                subdistrict: "Central Park",
                street: "5th Ave",
                streets: ["5th Ave", "Central Park West"],
                block: "Block 1",
                subblock: "Subblock A",
                postalCode: "10024",
                houseNumber: "1",
                building: "Park Building",
                unit: "101"
            },
            postalCodeDetails: [
                {
                    postalCode: "10024",
                    postalEntity: "Manhattan",
                    postalCodeType: "standard",
                    zipClassificationCode: "M"
                }
            ],
            position: {
                lat: 40.785091,
                lng: -73.968285
            },
            access: [
                { lat: 40.785091, lng: -73.968285 }
            ],
            distance: 500,
            mapView: {
                west: -73.981295,
                south: 40.764357,
                east: -73.949676,
                north: 40.800582
            },
            categories: [
                { id: "park", name: "Park", primary: true }
            ],
            foodTypes: [],
            houseNumberFallback: false,
            estimatedPointAddress: false,
            timeZone: {
                name: "America/New_York",
                utcOffset: "-04:00"
            },
            scoring: {
                queryScore: 0.9,
                fieldScore: {
                    country: 1,
                    countryCode: 1,
                    state: 1,
                    stateCode: 1,
                    county: 1,
                    countyCode: 1,
                    city: 1,
                    district: 1,
                    subdistrict: 1,
                    streets: [1, 0.9],
                    block: 0.8,
                    subblock: 0.7,
                    houseNumber: 0.9,
                    postalCode: 1,
                    building: 0.6,
                    unit: 0.5,
                    placeName: 1,
                    ontologyName: 0.8
                }
            },
            parsing: {
                placeName: [{ start: 0, end: 11, value: "Central Park", qq: "place" }],
                country: [{ start: 22, end: 35, value: "United States", qq: "country" }],
                state: [{ start: 12, end: 20, value: "New York", qq: "state" }],
                county: [{ start: 12, end: 20, value: "New York", qq: "county" }],
                city: [{ start: 12, end: 20, value: "New York", qq: "city" }],
                district: [{ start: 12, end: 20, value: "Manhattan", qq: "district" }],
                subdistrict: [{ start: 12, end: 20, value: "Central Park", qq: "subdistrict" }],
                street: [{ start: 12, end: 20, value: "5th Ave", qq: "street" }],
                block: [{ start: 12, end: 20, value: "Block 1", qq: "block" }],
                subblock: [{ start: 12, end: 20, value: "Subblock A", qq: "subblock" }],
                houseNumber: [{ start: 12, end: 20, value: "1", qq: "houseNumber" }],
                postalCode: [{ start: 12, end: 20, value: "10024", qq: "postalCode" }],
                building: [{ start: 12, end: 20, value: "Park Building", qq: "building" }],
                secondaryUnits: [],
                ontologyName: []
            },
            streetInfo: [
                {
                    baseName: "5th Ave",
                    streetType: "Ave",
                    streetTypePrecedes: true,
                    streetTypeAttached: false,
                    prefix: "",
                    suffix: "",
                    direction: "North",
                    language: "en"
                }
            ],
            countryInfo: {
                alpha2: "US",
                alpha3: "USA"
            },
            translations: {
                stateNames: [
                    {
                        names: [
                            {
                                value: "New York",
                                language: "en",
                                type: "official",
                                primary: true,
                                transliterated: false
                            }
                        ],
                        preference: "en"
                    }
                ],
                countyNames: [],
                cityNames: [],
                districtNames: []
            },
            mapReferences: {
                links: [
                    { cmId: "123", side: "left" }
                ],
                pointAddress: { hmcId: "xyz" },
                segments: [
                    { ref: "abc", side: "left" }
                ],
                country: { hmcId: "US" },
                state: { hmcId: "NY" },
                county: { hmcId: "NYC" },
                city: { hmcId: "NY" },
                district: { hmcId: "MH" },
                subdistrict: { hmcId: "CP" },
                cmVersion: {
                    region: "NA",
                    dvn: "v1"
                }
            },
            related: [],
            navigationAttributes: {
                functionalClass: [
                    { value: "class A" }
                ],
                access: [
                    {
                        automobiles: true,
                        bicycles: true,
                        buses: true,
                        carpools: true,
                        deliveries: true,
                        emergencyVehicles: true,
                        motorcycles: true,
                        pedestrians: true,
                        taxis: true,
                        throughTraffic: true,
                        trucks: true
                    }
                ],
                physical: [
                    {
                        boatFerry: false,
                        bridge: true,
                        deliveryRoad: false,
                        movableBridge: false,
                        multiplyDigitized: false,
                        paved: true,
                        private: false,
                        railFerry: false,
                        tunnel: false
                    }
                ]
            }
        },
        {
            title: "Eiffel Tower",
            id: "2",
            politicalView: "Neutral",
            resultType: "landmark",
            houseNumberType: "none",
            addressBlockType: "street",
            localityType: "urban",
            administrativeAreaType: "municipality",
            address: {
                label: "Eiffel Tower, Paris, France",
                countryCode: "FR",
                countryName: "France",
                stateCode: "IDF",
                state: "Île-de-France",
                countyCode: "75",
                county: "Paris",
                city: "Paris",
                district: "7th arrondissement",
                subdistrict: "Champ de Mars",
                street: "Champ de Mars",
                streets: ["Champ de Mars"],
                block: "Block 2",
                subblock: "Subblock B",
                postalCode: "75007",
                houseNumber: "5",
                building: "Eiffel Tower",
                unit: "Main"
            },
            postalCodeDetails: [
                {
                    postalCode: "75007",
                    postalEntity: "Paris",
                    postalCodeType: "standard",
                    zipClassificationCode: "C"
                }
            ],
            position: {
                lat: 48.858844,
                lng: 2.294351
            },
            access: [
                { lat: 48.858844, lng: 2.294351 }
            ],
            distance: 800,
            mapView: {
                west: 2.285846,
                south: 48.846884,
                east: 2.307914,
                north: 48.870704
            },
            categories: [
                { id: "landmark", name: "Landmark", primary: true }
            ],
            foodTypes: [],
            houseNumberFallback: true,
            estimatedPointAddress: true,
            timeZone: {
                name: "Europe/Paris",
                utcOffset: "+02:00"
            },
            scoring: {
                queryScore: 0.95,
                fieldScore: {
                    country: 1,
                    countryCode: 1,
                    state: 1,
                    stateCode: 1,
                    county: 1,
                    countyCode: 1,
                    city: 1,
                    district: 1,
                    subdistrict: 1,
                    streets: [1],
                    block: 0.9,
                    subblock: 0.8,
                    houseNumber: 0.7,
                    postalCode: 1,
                    building: 1,
                    unit: 0.6,
                    placeName: 1,
                    ontologyName: 0.9
                }
            },
            parsing: {
                placeName: [
                    { start: 0, end: 12, value: "Eiffel Tower", qq: "place" }
                ],
                country: [
                    { start: 14, end: 20, value: "France", qq: "country" }
                ],
                state: [
                    { start: 21, end: 34, value: "Île-de-France", qq: "state" }
                ],
                county: [
                    { start: 35, end: 40, value: "Paris", qq: "county" }
                ],
                city: [
                    { start: 41, end: 46, value: "Paris", qq: "city" }
                ],
                district: [
                    { start: 47, end: 67, value: "7th arrondissement", qq: "district" }
                ],
                subdistrict: [
                    { start: 68, end: 80, value: "Champ de Mars", qq: "subdistrict" }
                ],
                street: [
                    { start: 81, end: 94, value: "Champ de Mars", qq: "street" }
                ],
                block: [
                    { start: 95, end: 102, value: "Block 2", qq: "block" }
                ],
                subblock: [
                    { start: 103, end: 115, value: "Subblock B", qq: "subblock" }
                ],
                houseNumber: [
                    { start: 116, end: 117, value: "5", qq: "houseNumber" }
                ],
                postalCode: [
                    { start: 118, end: 123, value: "75007", qq: "postalCode" }
                ],
                building: [
                    { start: 124, end: 136, value: "Eiffel Tower", qq: "building" }
                ],
                secondaryUnits: [],
                ontologyName: []
            },
            streetInfo: [
                {
                    baseName: "Champ de Mars",
                    streetType: "Street",
                    streetTypePrecedes: false,
                    streetTypeAttached: false,
                    prefix: "",
                    suffix: "",
                    direction: "",
                    language: "fr"
                }
            ],
            countryInfo: {
                alpha2: "FR",
                alpha3: "FRA"
            },
            translations: {
                stateNames: [
                    {
                        names: [
                            {
                                value: "Île-de-France",
                                language: "fr",
                                type: "official",
                                primary: true,
                                transliterated: false
                            }
                        ],
                        preference: "fr"
                    }
                ],
                countyNames: [
                    {
                        names: [
                            {
                                value: "Paris",
                                language: "fr",
                                type: "official",
                                primary: true,
                                transliterated: false
                            }
                        ],
                        preference: "fr"
                    }
                ],
                cityNames: [
                    {
                        names: [
                            {
                                value: "Paris",
                                language: "fr",
                                type: "official",
                                primary: true,
                                transliterated: false
                            }
                        ],
                        preference: "fr"
                    }
                ],
                districtNames: [
                    {
                        names: [
                            {
                                value: "7th arrondissement",
                                language: "fr",
                                type: "official",
                                primary: true,
                                transliterated: false
                            }
                        ],
                        preference: "fr"
                    }
                ]
            },
            mapReferences: {
                links: [
                    { cmId: "456", side: "right" }
                ],
                pointAddress: { hmcId: "efg" },
                segments: [
                    { ref: "hij", side: "right" }
                ],
                country: { hmcId: "FR" },
                state: { hmcId: "IDF" },
                county: { hmcId: "75" },
                city: { hmcId: "PAR" },
                district: { hmcId: "7A" },
                subdistrict: { hmcId: "CDM" },
                cmVersion: {
                    region: "EU",
                    dvn: "v2"
                }
            },
            related: [
                {
                    relationship: "nearby",
                    title: "Seine River",
                    id: "3",
                    resultType: "river",
                    houseNumberType: "none",
                    address: {
                        label: "Seine River, Paris, France",
                        countryCode: "FR",
                        countryName: "France",
                        stateCode: "IDF",
                        state: "Île-de-France",
                        countyCode: "75",
                        county: "Paris",
                        city: "Paris",
                        district: "7th arrondissement",
                        subdistrict: "",
                        street: "",
                        streets: [],
                        block: "",
                        subblock: "",
                        postalCode: "",
                        houseNumber: "",
                        building: "",
                        unit: ""
                    },
                    position: {
                        lat: 48.858844,
                        lng: 2.294351
                    },
                    access: [
                        { lat: 48.858844, lng: 2.294351 }
                    ],
                    distance: 100,
                    mapView: {
                        west: 2.290846,
                        south: 48.850884,
                        east: 2.300914,
                        north: 48.865704
                    }
                }
            ],
            navigationAttributes: {
                functionalClass: [
                    { value: "class B" }
                ],
                access: [
                    {
                        automobiles: true,
                        bicycles: true,
                        buses: true,
                        carpools: true,
                        deliveries: false,
                        emergencyVehicles: true,
                        motorcycles: true,
                        pedestrians: true,
                        taxis: true,
                        throughTraffic: false,
                        trucks: false
                    }
                ],
                physical: [
                    {
                        boatFerry: false,
                        bridge: true,
                        deliveryRoad: false,
                        movableBridge: false,
                        multiplyDigitized: false,
                        paved: true,
                        private: false,
                        railFerry: false,
                        tunnel: false
                    }
                ]
            }
        }
    ]
}