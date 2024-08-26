import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'cdev-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() categorySelected!: number;
  @Output() productSelected = new EventEmitter<any>();

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

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categorySelected']) {
      this.listProducts(changes['categorySelected'].currentValue);
    }
  }

  ngOnInit() {
    this.listProducts(this.categorySelected);
  }

  selectProduct(product: any) {
    console.log('Product selected:', product);
    this.productSelected.emit(product);
  }

  listProducts(categoryId: number) {
    console.log('===================');
    console.log('Category selected:', categoryId);
    this.productsByCategory = this.products.filter(
      (product) => product.categoryId === categoryId
    );
  }
}
