import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    appSettings = require("application-settings");
    constructor(routerExtensions: RouterExtensions) {
        if (!this.appSettings.getBoolean("remember", false)) {
            this.appSettings.setBoolean("login", false);
            this.appSettings.setString("user", "");
        }
        const isAlreadyLoggedIn = this.appSettings.getBoolean("login", false);
        if (isAlreadyLoggedIn) {
            routerExtensions.navigate(["/tabs"], { clearHistory: true });
        }
      }
 }
