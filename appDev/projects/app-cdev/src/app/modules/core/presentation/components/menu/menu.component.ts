import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cdev-menu',
  standalone: true,
  imports: [MatIconModule, MatListModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuItems = [
    { name: 'Tablero', icon: 'dashboard', route: '/dashboard' },
    { name: 'Cursos', icon: 'school', route: '/course' },
    { name: 'Programaciones', icon: 'schedule', route: '/schedule' },
    { name: 'Usuarios', icon: 'person', route: '/user' },
  ];
}
