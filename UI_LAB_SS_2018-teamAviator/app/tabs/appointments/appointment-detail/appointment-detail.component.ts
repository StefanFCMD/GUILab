import { Component, OnInit } from "@angular/core";

@Component({
    selector: "AppointmentDetail",
    moduleId: module.id,
    templateUrl: "./appointment-detail.component.html",
    styleUrls: ["./appointment-detail.component.scss"]
})
export class AppointmentDetailComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
