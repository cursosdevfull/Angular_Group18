import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-title',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  title = input.required<string>();
  icon = input.required<string>();
}
