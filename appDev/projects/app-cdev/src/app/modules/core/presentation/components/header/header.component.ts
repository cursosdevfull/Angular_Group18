import {
  Component,
  inject,
  Injector,
  model,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as jwt from 'jwt-decode';

import { AuthService } from '../../../../auth/infrastructure/services/auth.service';
import { InactivityService } from '../../modules/inactivity/inactivity.service';

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
  inactivityService!: InactivityService;
  auth = inject(AuthService);
  username = signal<string>('');
  //private readonly inactivityService = inject(InactivityService);

  //constructor(private readonly inactivityService: InactivityService) {}
  constructor(private injector: Injector) {
    this.getInfoUser();
  }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      this.inactivityService = inject(InactivityService);
    });
  }

  toggleMainMenu() {
    this.mainHeaderMenuOpened.update((currentValue: boolean) => !currentValue);
  }

  blockSession() {
    this.inactivityService.lockScreen();
  }

  logout() {
    this.auth.logout();
  }

  getInfoUser() {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      const { name, lastname, roles } = jwt.jwtDecode(accessToken) as {
        name: string;
        lastname: string;
        roles: object;
      };
      this.username.set(`${name} ${lastname}`);
    }
  }
}
