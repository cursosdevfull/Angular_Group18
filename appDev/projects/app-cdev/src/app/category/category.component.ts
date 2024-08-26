import { Component, output } from '@angular/core';

@Component({
  selector: 'cdev-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories = [
    { categoryId: 1, name: 'Electronics' },
    { categoryId: 2, name: 'Clothing' },
    { categoryId: 3, name: 'Books' },
    { categoryId: 4, name: 'Home' },
    { categoryId: 5, name: 'Toys' },
  ];

  categorySelected = output<number>();

  selectCategory(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }
}
