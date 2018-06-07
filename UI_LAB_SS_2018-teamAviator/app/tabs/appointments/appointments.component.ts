import { Component, OnInit } from "@angular/core";
import { Appointment } from "~/models/appointment";
import { DummyService } from "~/models/dummy.service";

@Component({
    selector: "Appointments",
    providers: [DummyService],
    moduleId: module.id,
    templateUrl: "./appointments.component.html"
})
export class AppointmentsComponent implements OnInit {

    appointments: Array<Appointment>;

    constructor(private dummyService: DummyService) {
        this.appointments = dummyService.getAppointments();
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
