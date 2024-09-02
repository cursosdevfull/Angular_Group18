import { Component } from '@angular/core';

import { LayoutService } from '../../../../core/presentation/services/layout.service';

@Component({
  selector: 'cdev-page-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.css',
})
export class PageDashboardComponent {
  constructor(layoutService: LayoutService) {
    layoutService.setLayoutObs({ hideMainMenu: false, hideToolbar: false });

    console.log('DashboardComponent created');
  }
}
