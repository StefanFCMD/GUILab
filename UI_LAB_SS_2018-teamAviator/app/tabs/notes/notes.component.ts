import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { DummyService } from "~/models/dummy.service";
import { Note, NoteStatus } from "~/models/note";
import {screen} from "platform";
import { Label } from "ui/label";

class DataItem {
    constructor(public id: number, public name: string) { }
}


@Component({
    selector: "Notes",
    providers: [DummyService],
    moduleId: module.id,
    templateUrl: "./notes.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class NotesComponent implements OnInit {

    notes: Array<Note>;
	visibleNotes: Array<Note>;
	counter: number;
    appSettings = require("application-settings");
	directory;
	label:Label;
	
	constructor(private dummyService: DummyService) {
        
		this.notes = dummyService.getNotes();
		this.visibleNotes = [];
		this.directory = {};
		
		for(var i=0; i < this.notes.length; i++)	{
			this.directory[this.notes[i].id] = i;
			this.notes[i].wrapText = false;
			if(this.notes[i].status !== NoteStatus.Done && this.notes[i].assignedTo === this.appSettings.getString('user'))	{
				this.visibleNotes.push(this.notes[i]);
			}
		}
	}

    ngOnInit() { }
	
	public onTap(args) {
		
		this.label = <Label> args.object;
		this.notes[this.directory[this.label.id]].status = NoteStatus.Done;
	}
	
    public onItemTap(args) {
		console.log(Object.keys(args));
		console.log(args.object.nodeName[0]);
    	this.visibleNotes[args.index].wrapText = !this.visibleNotes[args.index].wrapText;
	}
}
