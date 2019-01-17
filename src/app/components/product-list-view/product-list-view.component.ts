import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  productList;  // --> types for each of these ? hint; all have same types
  categoryList;
  filteredList;

  constructor(private _productListService: ProductListService) { }

  ngOnInit() {
    this._productListService.getProductsList().subscribe((data: any) => { // --> type of data to be received ?
      console.log(data);
      this.productList = data.products;
      this.categoryList = data.categories;
      this.filteredList = this.productList;
    });
  }

  onListFiltered(filteredList: any): void { // type of filteredList ?
    this.filteredList = filteredList;
    console.log(this.filteredList.length);
  }

}
