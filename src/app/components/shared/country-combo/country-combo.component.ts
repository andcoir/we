import { Component, OnInit , Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CountryModel } from '../../../model/country.model';
import { CountryComboService } from '../../../services/country-combo.service';

@Component({
  selector: 'app-country-combo',
  templateUrl: './country-combo.component.html',
  styleUrls: ['./country-combo.component.scss'],
  providers:   [
    CountryComboService
  ]
  // inputs: ['defaultValue']
})
export class CountryComboComponent implements OnInit {
  _service: CountryComboService;

@Input() selectedCountry: CountryModel;
 //   service: CountryComboService;
 // public listItems: Observable<CountryModel[]> ;

  private view: Observable<CountryModel[]>;
  constructor( service: CountryComboService ) {
    this._service = service;
    this.view = service;
    this._service .read();
   // this.service = service;
   }

  ngOnInit() {
  //  this.service.get('getItems')
  //  .subscribe(x =>   this.listItems = x as CountryMode[]) ;

  }


}