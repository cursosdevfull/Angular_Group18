import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { InactivityService } from '../../modules/inactivity/inactivity.service';

@Component({
  selector: 'cdev-lock-session',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule],
  templateUrl: './lock-session.component.html',
  styleUrl: './lock-session.component.css',
})
export class LockSessionComponent {
  password = '';

  inactivityService = inject(InactivityService);

  unlockSession() {
    this.inactivityService.startInactivityTimer();
  }
}
