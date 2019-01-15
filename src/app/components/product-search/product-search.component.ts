import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  productList;
  categoryList;
  constructor(private _productListService: ProductListService) { }

  ngOnInit() {
    this._productListService.getProductsList().subscribe(data => {
      this.productList = data.products;
      this.categoryList = data.categories;
    });
  }
  onAddItem(buttonName) {
    this.productList.push(buttonName);
  }
}
