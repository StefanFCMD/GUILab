import * as EmailValidator from "email-validator";

export class User {
    email: string;
    password: string;
    isValidEmail() {
        return EmailValidator.validate(this.email);
    }
}
