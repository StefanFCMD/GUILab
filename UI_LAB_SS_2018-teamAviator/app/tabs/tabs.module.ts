import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AppointmentsComponent } from "~/tabs/appointments/appointments.component";
import { CustomersComponent } from "~/tabs/customers/customers.component";
import { MapComponent } from "~/tabs/map/map.component";
import { NotesComponent } from "~/tabs/notes/notes.component";
import { TabsRoutingModule } from "~/tabs/tabs-routing.module";
import { TabsComponent } from "~/tabs/tabs.component";
import { WarehouseComponent } from "~/tabs/warehouse/warehouse.component";
import { ListComponent } from "~/utils/list/list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        AppointmentsComponent,
        CustomersComponent,
        NotesComponent,
        MapComponent,
        WarehouseComponent,
        ListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
