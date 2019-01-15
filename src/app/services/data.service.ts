import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  messages: string[] = ['Tab'];
  empty: any = {};

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  getSearchData(searchFilter) {
    return searchFilter;
  }
  setSearchData(searchFilter) {
    this.empty = searchFilter;
  }
}
