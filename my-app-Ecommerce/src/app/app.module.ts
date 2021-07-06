import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { ScComponent } from './motorcycles/sc/sc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatSelectModule} from "@angular/material/select";
import { FilterPipe } from './pipes/filter.pipe'
import {MatSelectFilterModule} from 'mat-select-filter'
import { MatInputModule } from '@angular/material/input';
import { SortPipe } from './pipes/sort.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MotorcyclesComponent,
    ScComponent,
    FilterPipe,
    SortPipe,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectFilterModule,
    MatInputModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
