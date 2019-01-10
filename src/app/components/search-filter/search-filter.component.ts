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
  searchInputValue: string;
  priceRange: string;
  filteredList;
  radioFilter: boolean;

  constructor() { }

  ngOnInit() {
    console.log('priceRange', this.priceRange);
  }

  radioChangeHandler (event) {
    this.filteredList = [];
    this.priceRange = event.target.value;
    console.log(this.priceRange);
    if (this.priceRange === 'less') {
      this.productList.forEach(prod => {
        if (prod.price < 5000) {
          this.filteredList.push(prod);
        }
       });
    }
    this.filterList.emit(this.filteredList);
  }
  // } else if (this.priceRange === 'more') {
  //     if (product.price > 5000) {
  //       return this.radioFilter
  //     }
  //   } else {
  //       this.radioFilter
  //     }

  searchProduct() {
    this.filteredList = this.productList.filter(
    product => product.name === this.searchInputValue  );
    console.log(this.productList, this.filteredList);
    this.filterList.emit(this.filteredList);
  }

  // searchProduct() {
  //   this.filteredList = this.productList.filter(
  //     product => {
  //       if (this.priceRange === 'less') {
  //         if (product.price < 5000) {
  //           return this.radioFilter;
  //         }
  //       }
  //     }
  // }
//   import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent  {
//   places = [
//     {
//       name: 'Pune',
//       distance: 3000
//     },
//     {
//       name: 'Mumbai',
//       distance: 6000
//     },
//     {
//       name: 'Katni',
//       distance: 2000
//     },
//     {
//       name: 'Ahemedabad',
//       distance: 7000
//     },
//     {
//       name: 'Indore',
//       distance: 3000
//     },
//     {
//       name: 'Bhopal',
//       distance: 30000
//     }
//   ];

//   filteredPlaces = this.places;

//   searchModel = {
//     city: '',
//     distance: 'all'
//   }

//   filter() {
//     let regex = new RegExp(this.searchModel.city, 'ig');

//     if(this.searchModel.city && this.searchModel.distance === 'less') {
//       this.filteredPlaces = this.places.filter((place) => {
//         if (place.name.match(regex) && place.distance < 5000) {
//           return place;
//         }
//       });
//     } else if (!this.searchModel.city && this.searchModel.distance === 'less') {
//       this.filteredPlaces = this.places.filter((place) => {
//         if (place.distance < 5000) {
//           return place;
//         }
//       });
//     } else if (this.searchModel.city && this.searchModel.distance === 'more') {
//       this.filteredPlaces = this.places.filter((place) => {
//         if (place.name.match(regex) && place.distance >= 5000) {
//           return place;
//         }
//       });
//     } else if (!this.searchModel.city && this.searchModel.distance === 'more') {
//       this.filteredPlaces = this.places.filter((place) => {
//         if (place.distance >= 5000) {
//           return place;
//         }
//       });
//     } else {
//       this.filteredPlaces = this.places.filter((place) => {
//         if (place.name.match(regex)) {
//           return place;
//         }
//       });
//     }
//   }

//   reset() {
//     this.filteredPlaces = this.places;
//   }
// }

}
