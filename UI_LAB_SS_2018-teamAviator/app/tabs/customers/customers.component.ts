import { Component, OnInit } from "@angular/core";
import { Customer } from "~/models/customer";
import { DummyService } from "~/models/dummy.service";

@Component({
    selector: "Customers",
    providers: [DummyService],
    moduleId: module.id,
    templateUrl: "./customers.component.html"
})
export class CustomersComponent implements OnInit {

    customers: Array<Customer>;

    constructor(private dummyService: DummyService) {
        this.customers = dummyService.getCustomers();
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
