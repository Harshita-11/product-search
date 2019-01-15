import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  searchModel;  // search data object local to srvc
  private currentSearchModel = new Subject<any>();  // current filter values which needs to be set in search filter

  constructor() {
    console.log('SearchDataService const: ', this.searchModel);
  }

  // return search data object stored in srvc
  getSearchData() {
    console.log('getSearchData from service', this.searchModel);
    return this.searchModel;
  }

  // set srvc search data object to provided filter vals
  setSearchData(searchModel) {
    this.searchModel = Object.assign({}, searchModel);
    this.currentSearchModel.next(searchModel);

    console.log('setSearchData to service', this.searchModel);
  }

  setCurrentSearchModel(searchModel) {
    this.currentSearchModel.next(searchModel);
  }

  getCurrentSearchModel(): Observable<any> {
    return this.currentSearchModel.asObservable();
  }
}