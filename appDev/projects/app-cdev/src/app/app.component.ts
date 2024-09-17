import { Component, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './modules/core/presentation/components/header/header.component';
import { LockSessionComponent } from './modules/core/presentation/components/lock-session/lock-session.component';
import { MenuComponent } from './modules/core/presentation/components/menu/menu.component';
import { ZenModeDirective } from './modules/core/presentation/directives/zen-mode.directive';
import { InactivityService } from './modules/core/presentation/modules/inactivity/inactivity.service';
import {
  LayoutService,
  TLayout,
} from './modules/core/presentation/modules/layout/layout.service';

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
    ZenModeDirective,
    LockSessionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  mainMenuOpened = signal<boolean>(true);
  hideToolbar = false;
  hideMainMenu = false;

  layoutService = inject(LayoutService);
  inactivityService = inject(InactivityService);
  layoutSignal = this.layoutService.layoutSignal;

  inactivityDetected = signal<boolean>(false);

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

    effect(
      () => {
        //console.log('Estado inactividad', this.inactivityService.idleEvent());
        this.inactivityDetected.set(this.inactivityService.idleEvent());
      },
      {
        allowSignalWrites: true,
      }
    );

    this.inactivityService.startInactivityTimer();
  }

  toggleMainMenu() {
    this.mainMenuOpened.update((currentValue: boolean) => !currentValue);
  }

  activeZenMode(mode: boolean) {
    //alert('Zen mode is ' + (mode ? 'active' : 'inactive'));
    this.layoutService.setLayoutObs({ hideToolbar: mode, hideMainMenu: mode });
  }
}
