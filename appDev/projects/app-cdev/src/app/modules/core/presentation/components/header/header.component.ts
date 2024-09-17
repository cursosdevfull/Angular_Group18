import { Component, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'cdev-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  mainHeaderMenuOpened = model.required<boolean>();

  toggleMainMenu() {
    console.log('value', this.mainHeaderMenuOpened());
    this.mainHeaderMenuOpened.update((currentValue: boolean) => !currentValue);
  }
}
