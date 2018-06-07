import { Location } from "./location";

/**
 * One site of a customer.
 */
export class Site {

    readonly type: string = "site";
    id: string;

    // Name of this site
    name: string;

    // Location of this site
    location: Location;
}
