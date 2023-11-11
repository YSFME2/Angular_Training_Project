import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import {
  IProductServices,
  ProductServices,
} from 'src/app/Services/ProductServices';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  service = new ProductServices();

  products: Array<Product> = this.service.GetProducts();
  allCount = this.products.length;
  inStockCount = this.products.filter((f) => f.IsInStock === true).length;
  outOfStockCount = this.products.filter((f) => f.IsInStock === false).length;

  selectedFilter: string = 'all';

  @Input()
  searchText: string = '';

  onSelectedFilterChabged(filterValue: string) {
    console.log('filter value changed to : ' + filterValue);
    this.selectedFilter = filterValue;
  }
}
