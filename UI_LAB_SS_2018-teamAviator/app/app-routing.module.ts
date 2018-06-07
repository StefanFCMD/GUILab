import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptFormsModule,
        NativeScriptHttpModule
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
