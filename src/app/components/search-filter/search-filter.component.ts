import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() productList;
  @Output() filterList = new EventEmitter<any[]>();
  @Input() categoryList;
  searchInputValue: string;
  priceRange: string;
  filteredList: any[];
  radioFilter: boolean;
  categoryDropdownFilter: string;

  constructor() { }

  ngOnInit() {
    this.filteredList = [];
    console.log('priceRange', this.priceRange);
    console.log('ngOnInit**********', this.categoryList);
    console.log('########', this.productList);
  }

  radioChangeHandler (event) {
    this.priceRange = event.target.value;
    console.log(this.priceRange);
}
  searchProduct() {
    this.filteredList = [];
    console.log('searchInputValue', this.searchInputValue);
    console.log('inside search input', this.productList);
    console.log('inside se', this.categoryList);
    // this.filteredList = this.productList.filter(
    // product => product.name === this.searchInputValue  );
    // console.log(this.productList, this.filteredList);
    // this.filterList.emit(this.filteredList);
    // this.filteredList = [];
    // this.productList.forEach(prod => {
    //   if (prod.name === this.searchInputValue) {
    //     this.filteredList.push(prod);
    //   }
    //   this.filterList.emit(this.filteredList);
    // });
    // this.productList.forEach(prod => {
    //   if (this.priceRange === 'less') {
    //       if (prod.price < 5000) {
    //         this.filteredList.push(prod);
    //       }
    //      } else if (this.priceRange === 'more') {
    //        if (prod.price > 5000) {
    //          this.filteredList.push(prod);
    //        }
    //      } else {
    //       this.filteredList.push(prod);
    //      }
    //   this.filterList.emit(this.filteredList);
    // });
    const regex = new RegExp(this.searchInputValue, 'ig');
    this.productList.forEach(prod => {
      if (prod.name === this.searchInputValue.match(regex)) {
        if (this.priceRange === 'less') {
          if (prod.price < 5000) {
          this.filteredList.push(prod);
          }
        } else if (this.priceRange === 'more') {
          if (prod.price > 5000) {
          this.filteredList.push(prod);
          }
        } else if (this.priceRange === 'noPriceRange' || this.priceRange === undefined) {
          this.filteredList.push(prod);
        } else if (!(this.priceRange === 'less' || this.priceRange === 'more' ||
                  this.priceRange === 'noPriceRange')) {
          this.filteredList.push(prod);
        }
      }
       if (this.searchInputValue === '' || this.searchInputValue === undefined) {
        if (this.priceRange === 'less') {
          if (prod.price < 5000) {
          this.filteredList.push(prod);
          }
        } else if (this.priceRange === 'more') {
          if (prod.price > 5000) {
          this.filteredList.push(prod);
          }
        } else if (this.priceRange === 'noPriceRange') {
          this.filteredList.push(prod);
        }
      }
    });
    this.filterList.emit(this.filteredList);
  }
  dropdownFilter(event) {
    this.categoryDropdownFilter = event.target.value;
    console.log('this.categoryDropdownFilter', this.categoryDropdownFilter);
  }
}
