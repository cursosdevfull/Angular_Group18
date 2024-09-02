import { Component, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { LayoutService, TLayout } from './modules/core/presentation/services/layout.service';

@Component({
  selector: 'cdev-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
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

  constructor(/*layoutService: LayoutService*/) {
    effect(() => {
      const data = this.layoutSignal() as TLayout;
      if (data.hideMainMenu !== undefined) {
        this.hideMainMenu = data.hideMainMenu;
      }

      if (data.hideToolbar !== undefined) {
        this.hideToolbar = data.hideToolbar;
      }
    });

    /* layoutService.getLayoutObs().subscribe({
      next: (data: TLayout) => {
        if (data.hideMainMenu !== undefined) {
          this.hideMainMenu.set(data.hideMainMenu);
        }

        if (data.hideToolbar !== undefined) {
          this.hideToolbar.set(data.hideToolbar);
        }
      },
    }); */
  }

  toggleMainMenu() {
    this.mainMenuOpened.update((currentValue: boolean) => !currentValue);
  }
}
