import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ProductTabComponent implements OnInit {
  @Input() productList;
  @Input() index;
  @Output() addItem = new EventEmitter<any>();

  constructor(private messageService: DataService) { }

  ngOnInit() {
  }
  addButton() {
    // this.addItem.emit(++this.productList[this.index]);
    // console.log('this.cardList************', this.index);
    // console.log(this.productList, this.productList);
    // console.log(this.productList, this.productList);
    this.messageService.add('Tab');
  }
}
