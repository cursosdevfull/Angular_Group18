import { Component, signal } from '@angular/core';

import { CategoryComponent } from '../category/category.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'cdev-product',
  standalone: true,
  imports: [CategoryComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  categorySelected = signal<number>(0);
  productSelected = signal<any>(null);
}
