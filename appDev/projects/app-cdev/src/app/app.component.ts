import { Component, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './modules/core/presentation/components/header/header.component';
import { MenuComponent } from './modules/core/presentation/components/menu/menu.component';
import {
  LayoutService,
  TLayout,
} from './modules/core/presentation/services/layout.service';

@Component({
  selector: 'cdev-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  mainMenuOpened = signal<boolean>(true);
  hideToolbar = false;
  hideMainMenu = false;

  layoutService = inject(LayoutService);
  layoutSignal = this.layoutService.layoutSignal;

  constructor() {
    effect(() => {
      const data = this.layoutSignal() as TLayout;
      if (data.hideMainMenu !== undefined) {
        this.hideMainMenu = data.hideMainMenu;
      }

      if (data.hideToolbar !== undefined) {
        this.hideToolbar = data.hideToolbar;
      }
    });
  }

  toggleMainMenu() {
    this.mainMenuOpened.update((currentValue: boolean) => !currentValue);
  }
}
