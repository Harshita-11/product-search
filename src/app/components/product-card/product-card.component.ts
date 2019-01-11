import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  @Input() itemIndex: number;

  constructor() { }

  ngOnInit() {
    console.log('rating', this.product.rating);
    // console.log('length', this.product[].length);
  }

}
