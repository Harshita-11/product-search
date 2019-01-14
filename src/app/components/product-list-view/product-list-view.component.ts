import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  productList;
  categoryList;
  filteredList;

  constructor(private _productListService: ProductListService) { }

  ngOnInit() {
    this._productListService.getProductsList().subscribe(data => {
      console.log(data);
      this.productList = data.products;
      this.categoryList = data.categories;
      this.filteredList = this.productList;
    });
  }

  onListFiltered(filteredList) {
    this.filteredList = filteredList;
    console.log(this.filteredList.length);
  }

}
