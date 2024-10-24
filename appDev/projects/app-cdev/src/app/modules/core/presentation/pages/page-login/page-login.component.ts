import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LottieComponent } from 'ngx-lottie';

import { AnimationComponent } from '../../../../../../../../app-cdev-lib/src/lib/animation/animation.component';
import { LoginComponent } from '../../components/login/login.component';
import { LayoutService } from '../../modules/layout/layout.service';

@Component({
  selector: 'cdev-page-login',
  standalone: true,
  imports: [LottieComponent, LoginComponent, AnimationComponent, RouterOutlet],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
  providers: [],
})
export class PageLoginComponent {
  constructor(layoutService: LayoutService) {
    layoutService.setLayoutObs({ hideMainMenu: true, hideToolbar: true });

    console.log('LoginComponent created');
  }
}
