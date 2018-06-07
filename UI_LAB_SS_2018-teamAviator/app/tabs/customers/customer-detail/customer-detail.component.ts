import { Component, OnInit } from "@angular/core";

@Component({
    selector: "CustomerDetail",
    moduleId: module.id,
    templateUrl: "./customer-detail.component.html",
    styleUrls: ["./customer-detail.component.scss"]
})
export class CustomerComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
