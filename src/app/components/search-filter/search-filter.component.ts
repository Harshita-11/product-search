import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() productList;
  @Output() filterList = new EventEmitter<any[]>();
  searchInputValue: string;
  filteredList;

  constructor() { }

  ngOnInit() {
  }

  searchProduct() {
    this.filteredList = this.productList.filter(product => product.name === this.searchInputValue);
    console.log(this.productList, this.filteredList);
    this.filterList.emit(this.filteredList);
  }

}
