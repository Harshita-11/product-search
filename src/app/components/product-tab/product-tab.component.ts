import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ProductTabComponent implements OnInit {
  searchDataArr = [{
    searchInputValue: '',
    priceRange: '',
    category: ''
  }];

  constructor(private _searchDataService: SearchDataService) { }

  ngOnInit() {
  }

  goToTab(index) {
    console.log(this.searchDataArr[index]);
    this.setSearchData(index);
  }

  addNewTab(addAtIndex) {
    const searchData = this._searchDataService.getSearchData();

    if (searchData) {
      this.searchDataArr.splice(addAtIndex, 0, searchData);
    }

    console.log('tab added!', this.searchDataArr, this.searchDataArr[addAtIndex]);

    this.setSearchData(addAtIndex, true);
  }

  removeCurrentTab(currentTabIndex) {
    this.searchDataArr.splice(currentTabIndex, 1);
    console.log('tab removed!', this.searchDataArr);

    this.setSearchData(currentTabIndex);
  }

  setSearchData(index, isAdded?) {
    if (isAdded) {
      this._searchDataService.setCurrentSearchModel({
        searchInputValue: '',
        priceRange: '',
        category: ''
      });
    } else {
      this._searchDataService.setCurrentSearchModel(this.searchDataArr[index]);
    }
  }
}
