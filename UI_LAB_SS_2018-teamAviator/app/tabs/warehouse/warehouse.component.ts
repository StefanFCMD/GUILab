import { Component, OnInit } from "@angular/core";
import { DummyService } from "~/models/dummy.service";
import { SparePart } from "~/models/spare-part";

@Component({
    selector: "Warehouse",
    providers: [DummyService],
    moduleId: module.id,
    templateUrl: "./warehouse.component.html"
})
export class WarehouseComponent implements OnInit {

    spareParts: Array<SparePart>;

    constructor(private dummyService: DummyService) {
        this.spareParts = dummyService.getSpareParts();
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
