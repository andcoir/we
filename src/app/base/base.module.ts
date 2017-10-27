import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {JsonpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { RTL } from '@progress/kendo-angular-l10n';

import { BaseRoutingModule } from './base-routing.module';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { BuildingStructureTypeComponent } from './building-structure-type/building-structure-type.component';
import { CompanyTypeComponent } from './company-type/company-type.component';
import { ProvinceComponent } from './province/province.component';
import { ScaleComponent } from './scale/scale.component';


import { CountryService } from './country/country.service';
// import { CategoriesService } from './country/country.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    BaseRoutingModule,
    FormsModule,

    // Register the modules
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DropDownsModule,

  ],
  providers: [
     CountryService,
     { provide: RTL, useValue: true }
  ],
  declarations: [
    CityComponent,
    CountryComponent,
    BuildingStructureTypeComponent,
    CompanyTypeComponent,
    ProvinceComponent,
    ScaleComponent]
})
export class BaseModule { }