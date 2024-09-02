import { Component, effect, input } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'lib-animation',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
})
export class AnimationComponent {
  pathAnimation = input.required<string>();
  styleAnimation = input<{ maxWidth: string; maxHeight: string }>();

  options: AnimationOptions = {
    path: '',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
  };

  constructor() {
    effect(() => {
      this.options = { path: this.pathAnimation() };
    });

    effect(() => {
      this.styles = {
        maxWidth: this.styleAnimation()?.maxWidth,
        maxHeight: this.styleAnimation()?.maxHeight,
      };
    });
  }

  /*   ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes['pathAnimation']) {
      this.options = { path: changes['pathAnimation'].currentValue };
    }
  } */
}
