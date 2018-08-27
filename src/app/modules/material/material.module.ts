import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MatListModule,
        MatSidenavModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule
    ],
    declarations: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MaterialModule { }
