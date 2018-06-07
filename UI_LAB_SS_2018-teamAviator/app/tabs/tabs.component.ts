import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import { SelectedIndexChangedEventData, TabView, TabViewItem } from "tns-core-modules/ui/tab-view";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "TabsComponent",
    moduleId: module.id,
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {

    private _title: string;
    appSettings = require("application-settings")

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onNewServiceRequest() {
        console.warn("TODO: Call ServiceRequestComponent");
    }

    logout() {
        this.appSettings.clear();
        this.routerExtensions.navigate(["/login"], {clearHistory: true});
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
        }
    }


    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        const tabView = <TabView>args.object;
        const selectedTabViewItem = tabView.items[args.newIndex];

        this.title = selectedTabViewItem.title;
    }
}
