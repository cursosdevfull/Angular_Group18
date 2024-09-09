import { Component, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'cdev-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
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
