import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ProvinceModel } from '../model/province.model';
import { BaseService } from './base.service';
import { BaseKendoGridService } from './base-kendo-grid.service';
import { UrlHelper } from '../infrastructure/url-helper';

@Injectable()
export class SpecialStatusValueService  extends BaseService {

  constructor(http: Http) {
    super(http, UrlHelper.SpecialStatusValue_API);
   }



}



@Injectable()
export class SpecialStatusValueKendoGridService  extends BaseKendoGridService {

  constructor(http: Http) {
    super(http,  UrlHelper.SpecialStatusValue_API);
   }


}
