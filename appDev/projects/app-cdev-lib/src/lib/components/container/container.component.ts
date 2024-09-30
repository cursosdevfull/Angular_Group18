import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-container',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
