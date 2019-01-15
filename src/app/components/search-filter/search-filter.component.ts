import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit, OnChanges {
  @Input() productList;
  @Input() categoryList;

  @Output() filterList = new EventEmitter<any[]>();

  searchInputValue: string;
  priceRange: string;
  filteredList;
  radioFilter: boolean;
  categoryDropdownFilter: string;
  searchFilter = {
    searchInputValue: '',
    priceRange: '',
    category: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.filteredList = this.productList;
    // console.log('init: ', this.productList);
  }

  ngOnChanges() {
    this.filteredList = this.productList;
    // console.log('ngOnChanges: ', this.productList);
    this.dataService.getSearchData(this.filteredList);
  }

  searchProduct() {
    this.filteredList = this.productList;
    let filterFilteredList = [];
    const regex = new RegExp(this.searchFilter.searchInputValue, 'ig');

    for (const key of Object.keys(this.searchFilter)) {
      if (this.searchFilter[key].length) {
        if (key === 'searchInputValue') {
          this.filteredList = this.filteredList.filter(prod => {
            return prod.name.match(regex);
          });

          console.log('searchInputValue: ', this.filteredList);
        } else if (key === 'priceRange') {
          filterFilteredList = [];

          this.filteredList.forEach(prod => {
            if (this.searchFilter.priceRange === 'less' && prod.price < 5000) {
              filterFilteredList.push(prod);
            } else if (this.searchFilter.priceRange === 'more' && prod.price >= 5000) {
              filterFilteredList.push(prod);
            } else if (this.searchFilter.priceRange === 'noPriceRange') {
              filterFilteredList.push(prod);
            }
          });

          this.filteredList = filterFilteredList;
        } else if (key === 'category') {
          filterFilteredList = [];

          this.filteredList.forEach(prod => {
            if (prod.categories.includes(parseInt(this.searchFilter.category, 10))) {
              filterFilteredList.push(prod);
            }
          });

          this.filteredList = filterFilteredList;
        }
      }
    }
    this.filterList.emit(this.filteredList);
  }

  removeFilter() {
    this.searchFilter = {
      searchInputValue: '',
      priceRange: '',
      category: ''
    };
    this.filteredList = this.productList;
    this.filterList.emit(this.filteredList);
  }
}

