import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CursoComponent } from './curso/curso.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'cdev-root',
  standalone: true,
  imports: [RouterOutlet, CursoComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appCDev';
}
