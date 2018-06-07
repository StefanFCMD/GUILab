import { Site } from "./site";

/**
 * An appointment for a site.
 */
export class Appointment {

    readonly type: string = "appointment";
    id: string;

    // A short description for the technician
    description: string;

    // The Date of the appointment
    date: Date;

    // The site of a customer where the actual appointment takes places
    site: Site;
}
