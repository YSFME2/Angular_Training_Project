import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { AboutComponent } from './About/about/about.component';
import { ContactComponent } from './Contant/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { SearchComponent } from './container/search/search.component';
import { ProductServices } from './Services/ProductServices';
import { BtnStyleDirective } from './CustomDirectives/btn-style.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, ProductListComponent, ProductComponent, FilterComponent, SearchComponent, BtnStyleDirective],
  imports: [BrowserModule, FormsModule,],
  providers: [ProductServices],
  bootstrap: [AppComponent],
})
export class AppModule { }
