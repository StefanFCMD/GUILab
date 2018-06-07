/**
 * All supported countries:
 * ------------------------
 * DE: Germany
 * CH: Switzerland
 * AT: Austria
 */
export enum Country {
    DE,
    CH,
    AT
}

/**
 * The combination of an address and a geo location.
 */
export class Location {

    readonly type: string = "location";
    id: string;

    // Street of an address, e.g. "Moltkestraße"
    street: string;

    // Street of an address, e.g. "30"
    number: string;

    // Street of an address, e.g. 76133
    zipCode: number;

    // Street of an address, e.g. "Karlsruhe"
    city: string;

    // Country of an address, e.g. Country.DE
    country: Country;

    // A geographic coordinate that specifies the north–south position of a point on the Earth's surface, e.g. 49.015666
    latitude: number;

    // A geographic coordinate that specifies the east-west position of a point on the Earth's surface, e.g. 8.389606
    longitude: number;
}
