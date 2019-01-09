import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatListModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    ProductSearchComponent,
    ProductTabComponent,
    ProductListViewComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
