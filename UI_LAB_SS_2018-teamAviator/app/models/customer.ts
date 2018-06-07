import { Contact } from "./contact";
import { Site } from "./site";

/**
 * All top-level information about a company that is our customer.
 */
export class Customer {

    readonly type: string = "customer";
    id: string;

    // Name of the company
    name: string;

    // Main responsible contact person of the company
    contact: Contact;

    // List of all sites
    sites: Array<Site>;
}
