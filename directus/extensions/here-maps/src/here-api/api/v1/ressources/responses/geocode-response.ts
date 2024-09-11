export interface GeocodeResponse {
    suggestions: Item[]
}

interface Address {
    label: string;
    countryCode: string;
    countryName: string;
    stateCode: string;
    state: string;
    countyCode: string;
    county: string;
    city: string;
    district: string;
    subdistrict: string;
    street: string;
    streets: string[];
    block: string;
    subblock: string;
    postalCode: string;
    houseNumber: string;
    building: string;
    unit: string;
}

interface PostalCodeDetail {
    postalCode: string;
    postalEntity: string;
    postalCodeType: string;
    zipClassificationCode: string;
}

interface Position {
    lat: number;
    lng: number;
}

interface MapView {
    west: number;
    south: number;
    east: number;
    north: number;
}

interface Category {
    id: string;
    name: string;
    primary: boolean;
}

interface FoodType {
    id: string;
    name: string;
    primary: boolean;
}

interface TimeZone {
    name: string;
    utcOffset: string;
}

interface FieldScore {
    country: number;
    countryCode: number;
    state: number;
    stateCode: number;
    county: number;
    countyCode: number;
    city: number;
    district: number;
    subdistrict: number;
    streets: number[];
    block: number;
    subblock: number;
    houseNumber: number;
    postalCode: number;
    building: number;
    unit: number;
    placeName: number;
    ontologyName: number;
}

interface Scoring {
    queryScore: number;
    fieldScore: FieldScore;
}

interface ParsingValue {
    start: number;
    end: number;
    value: string;
    qq: string;
}

interface Parsing {
    placeName: ParsingValue[];
    country: ParsingValue[];
    state: ParsingValue[];
    county: ParsingValue[];
    city: ParsingValue[];
    district: ParsingValue[];
    subdistrict: ParsingValue[];
    street: ParsingValue[];
    block: ParsingValue[];
    subblock: ParsingValue[];
    houseNumber: ParsingValue[];
    postalCode: ParsingValue[];
    building: ParsingValue[];
    secondaryUnits: ParsingValue[];
    ontologyName: ParsingValue[];
}

interface StreetInfo {
    baseName: string;
    streetType: string;
    streetTypePrecedes: boolean;
    streetTypeAttached: boolean;
    prefix: string;
    suffix: string;
    direction: string;
    language: string;
}

interface CountryInfo {
    alpha2: string;
    alpha3: string;
}

interface TranslationName {
    value: string;
    language: string;
    type: string;
    primary: boolean;
    transliterated: boolean;
}

interface TranslationPreference {
    names: TranslationName[];
    preference: string;
}

interface Translations {
    stateNames: TranslationPreference[];
    countyNames: TranslationPreference[];
    cityNames: TranslationPreference[];
    districtNames: TranslationPreference[];
}

interface MapReferenceLink {
    cmId: string;
    side: string;
}

interface MapReferencePointAddress {
    hmcId: string;
}

interface MapReferenceSegment {
    ref: string;
    side: string;
}

interface MapReferences {
    links: MapReferenceLink[];
    pointAddress: MapReferencePointAddress;
    segments: MapReferenceSegment[];
    country: {
        hmcId: string;
    };
    state: {
        hmcId: string;
    };
    county: {
        hmcId: string;
    };
    city: {
        hmcId: string;
    };
    district: {
        hmcId: string;
    };
    subdistrict: {
        hmcId: string;
    };
    cmVersion: {
        region: string;
        dvn: string;
    };
}

interface RelatedAddress {
    label: string;
    countryCode: string;
    countryName: string;
    stateCode: string;
    state: string;
    countyCode: string;
    county: string;
    city: string;
    district: string;
    subdistrict: string;
    street: string;
    streets: string[];
    block: string;
    subblock: string;
    postalCode: string;
    houseNumber: string;
    building: string;
    unit: string;
}

interface Related {
    relationship: string;
    title: string;
    id: string;
    resultType: string;
    houseNumberType: string;
    address: RelatedAddress;
    position: Position;
    access: Position[];
    distance: number;
    mapView: MapView;
}

interface NavigationAttribute {
    value: string;
}

interface NavigationAccess {
    automobiles: boolean;
    bicycles: boolean;
    buses: boolean;
    carpools: boolean;
    deliveries: boolean;
    emergencyVehicles: boolean;
    motorcycles: boolean;
    pedestrians: boolean;
    taxis: boolean;
    throughTraffic: boolean;
    trucks: boolean;
}

interface NavigationPhysical {
    boatFerry: boolean;
    bridge: boolean;
    deliveryRoad: boolean;
    movableBridge: boolean;
    multiplyDigitized: boolean;
    paved: boolean;
    private: boolean;
    railFerry: boolean;
    tunnel: boolean;
}

interface NavigationAttributes {
    functionalClass: NavigationAttribute[];
    access: NavigationAccess[];
    physical: NavigationPhysical[];
}

interface Item {
    title: string;
    id: string;
    politicalView: string;
    resultType: string;
    houseNumberType: string;
    addressBlockType: string;
    localityType: string;
    administrativeAreaType: string;
    address: Address;
    postalCodeDetails: PostalCodeDetail[];
    position: Position;
    access: Position[];
    distance: number;
    mapView: MapView;
    categories: Category[];
    foodTypes: FoodType[];
    houseNumberFallback: boolean;
    estimatedPointAddress: boolean;
    timeZone: TimeZone;
    scoring: Scoring;
    parsing: Parsing;
    streetInfo: StreetInfo[];
    countryInfo: CountryInfo;
    translations: Translations;
    mapReferences: MapReferences;
    related: Related[];
    navigationAttributes: NavigationAttributes;
}