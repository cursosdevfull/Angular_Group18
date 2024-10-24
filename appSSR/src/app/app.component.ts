import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appSSR';

  constructor(readonly titleService: Title, readonly meta: Meta) {
    setTimeout(() => {
      this.title = 'appSSR - Angular 12 SSR';
      this.titleService.setTitle(this.title);
      this.meta.addTags([
        {
          name: 'description',
          content:
            'Angular 12 Server Side Rendering (SSR) with Angular Universal',
        },
      ]);
    }, 2000);
  }
}
