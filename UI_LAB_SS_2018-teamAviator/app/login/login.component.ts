// Angular imports
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
// NativeScript imports
import { Page } from "ui/page";

// App imports
import { User } from "./user/user";
import { UserService } from "./user/user.service";

@Component({
    selector: "LoginComponent",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {

    user: User;
    appSettings = require("application-settings");

    @ViewChild("container") container: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;
    @ViewChild("remember") remember: ElementRef;

    constructor(private routerExtensions: RouterExtensions, private userService: UserService, private page: Page) {
        this.user = new User();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_uilab";
    }

    submit() {
        console.log("User " + this.user.email + " is logging in.");
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
        } else {
            this.login();
        }
    }

    login() {
        /*
        You can uncomment this code, which will then log in a user with default data. Since we don't actually have any
        registration service, this is utterly pointless, and the whole "login" process can be faked. Which is actually
        done here :)

        let loginUser = new User();
        loginUser.email = "nils@holgersson.se";
        loginUser.password = "Selma Lagerlöf";
        console.info("Logging in with default user credentials. No actual registration implemented, as of yet.");
        this.userService.login(loginUser)
            .subscribe(
                () => this.routerExtensions.navigate(["/tabs"], { clearHistory: true }),
                (error) => alert("Unfortunately we could not find your account.")
            );
        */
        if (this.remember.nativeElement.checked) {
            this.appSettings.setBoolean("remember", true);
        } else {
            this.appSettings.setBoolean("remember", false);
        }
        this.appSettings.setBoolean("login", true);
        this.appSettings.setString("user", this.user.email);
        this.routerExtensions.navigate(["/tabs"], {clearHistory: true});

    }
}
