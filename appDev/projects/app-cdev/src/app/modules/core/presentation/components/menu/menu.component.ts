import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'cdev-menu',
  standalone: true,
  imports: [MatIconModule, MatListModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Course', icon: 'school', route: '/course' },
    { name: 'Schedule', icon: 'schedule', route: '/schedule' },
    { name: 'User', icon: 'person', route: '/user' },
  ];
}
