import { Component, input } from '@angular/core';

@Component({
  selector: 'cdev-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  details = input.required<any>();
}
