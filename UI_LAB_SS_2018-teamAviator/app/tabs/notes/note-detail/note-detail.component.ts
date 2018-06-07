import { Component, OnInit } from "@angular/core";

@Component({
    selector: "NoteDetail",
    moduleId: module.id,
    templateUrl: "./note-detail.component.html",
    styleUrls: ["./note-detail.component.scss"]
})
export class NoteDetailComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
