import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ContainerComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/container/container.component';
import { TitleComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/title/title.component';
import { TableComponent } from '../../../../../../../../app-cdev-lib/src/public-api';
import { LayoutService } from '../../../../core/presentation/modules/layout/layout.service';
import { GraphComponent } from '../../components/graph/graph.component';

@Component({
  selector: 'cdev-page-dashboard',
  standalone: true,
  imports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    GraphComponent,
  ],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.css',
})
export class PageDashboardComponent {
  title = 'Tablero';
  icon = 'dashboard';

  constructor(layoutService: LayoutService) {
    layoutService.setLayoutObs({ hideMainMenu: false, hideToolbar: false });

    console.log('DashboardComponent created');
  }
}
