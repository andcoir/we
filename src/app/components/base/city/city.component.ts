import { Component, OnInit } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';

import { CityModel } from '../../../model/city.model';
import { BaseKendoGridComponent } from '../../shared/base-kendo-grid.component';
import { BaseKendoGridService } from '../../../services/base-kendo-grid.service';
import { CityService } from '../../../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [CityService],

})
export class CityComponent extends BaseKendoGridComponent {
  public listItems: Array<CityModel>;
  selectDataItem: CityModel;

  constructor(service: CityService) {
    super(service);

    this.selectDataItem = {
      cityId: 3,
      cityName: 'sfdsfdsfsd',
      provinceId: 1,
      provinceName: 'ddd'
    };

    // this._countryService = service;
    // this.gridDataResult = service;
    // this._countryService.readGrid();
  }

  ngOnInitHandler() {
    this.refresh();
    // .sub;


  }

  private refresh(): void {
    this._service.readGrid();
    // this._countryService.getCountries().subscribe((c: CountryModel[]) => {
    // this._countryService.fetch(this.state).subscribe((c: CountryModel[]) => {
    //   this.countries = c;
    //   this.loadItems();
    // });

  }


  public dataStateChange(state: DataStateChangeEvent): void {

    this._service.state = state;
    this.refresh();
  }


}
