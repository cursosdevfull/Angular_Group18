import {
  Component,
  inject,
  Injector,
  model,
  runInInjectionContext,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

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
  //private readonly inactivityService = inject(InactivityService);

  //constructor(private readonly inactivityService: InactivityService) {}
  constructor(private injector: Injector) {}

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
}
