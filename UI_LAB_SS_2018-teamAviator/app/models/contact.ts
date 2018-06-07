import * as EmailValidator from "email-validator";

/**
 * A person that is a contact of a customer or a site.
 */
export class Contact {

    readonly type: string = "contact";
    id: string;

    // First name, e.g. "John"
    firstName: string;

    // Last name, e.g. "Doe"
    lastName: string;

    // Position within the company, e.g. "Site Manager"
    position: string;

    // Email address, e.g. "john.doe@company.com"
    email: string;

    // (Mobile) Phone number, e.g. "+49 1234 56 78 90 12"
    phone: string;

    isEmailValid() {
        return EmailValidator.validate(this.email);
    }
}
