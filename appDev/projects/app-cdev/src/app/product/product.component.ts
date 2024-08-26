import { Component } from '@angular/core';

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
  categories = [
    { categoryId: 1, name: 'Electronics' },
    { categoryId: 2, name: 'Clothing' },
    { categoryId: 3, name: 'Books' },
    { categoryId: 4, name: 'Home' },
    { categoryId: 5, name: 'Toys' },
  ];

  products = [
    {
      productId: 1,
      name: 'Laptop',
      categoryId: 1,
      price: 1000,
      description: 'Laptop description',
    },
    {
      productId: 2,
      name: 'T-shirt',
      categoryId: 2,
      price: 20,
      description: 'T-shirt description',
    },
    {
      productId: 3,
      name: 'Book',
      categoryId: 3,
      price: 10,
      description: 'Book description',
    },
    {
      productId: 4,
      name: 'Chair',
      categoryId: 4,
      price: 50,
      description: 'Chair description',
    },
    {
      productId: 5,
      name: 'Toy',
      categoryId: 5,
      price: 15,
      description: 'Toy description',
    },
    {
      productId: 6,
      name: 'Mobile',
      categoryId: 1,
      price: 800,
      description: 'Mobile description',
    },
    {
      productId: 7,
      name: 'Jeans',
      categoryId: 2,
      price: 30,
      description: 'Jeans description',
    },
    {
      productId: 8,
      name: 'Novel',
      categoryId: 3,
      price: 5,
      description: 'Novel description',
    },
    {
      productId: 9,
      name: 'Table',
      categoryId: 4,
      price: 40,
      description: 'Table description',
    },
    {
      productId: 10,
      name: 'Doll',
      categoryId: 5,
      price: 10,
      description: 'Doll description',
    },
    {
      productId: 11,
      name: 'Desktop',
      categoryId: 1,
      price: 1200,
      description: 'Desktop description',
    },
    {
      productId: 12,
      name: 'Shirt',
      categoryId: 2,
      price: 25,
      description: 'Shirt description',
    },
    {
      productId: 13,
      name: 'Magazine',
      categoryId: 3,
      price: 3,
      description: 'Magazine description',
    },
    {
      productId: 14,
      name: 'Sofa',
      categoryId: 4,
      price: 60,
      description: 'Sofa description',
    },
    {
      productId: 15,
      name: 'Car',
      categoryId: 5,
      price: 25,
      description: 'Car description',
    },
  ];

  productsByCategory: any[] = [];

  details: any;

  categorySelectedId!: number;
  productSelected: object | undefined | null;

  productList(categoryId: number) {
    this.details = null;
    this.productsByCategory = this.products.filter(
      (product) => product.categoryId === categoryId
    );
  }

  productDetail(productId: number) {
    this.details = this.products.find(
      (product) => product.productId === productId
    );
  }

  setCategorySelected(categoryId: number) {
    this.categorySelectedId = categoryId;
    this.productSelected = null;
  }

  setProductSelected(product: any) {
    this.productSelected = product;
  }
}
