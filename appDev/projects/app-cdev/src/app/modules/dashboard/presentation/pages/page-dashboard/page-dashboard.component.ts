import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ContainerComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/container/container.component';
import { TitleComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/title/title.component';
import {
  MetadataList,
  TableComponent,
} from '../../../../../../../../app-cdev-lib/src/public-api';
import { LayoutService } from '../../../../core/presentation/modules/layout/layout.service';

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
  ],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.css',
})
export class PageDashboardComponent {
  title = 'Dashboard';

  metadataList: MetadataList = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'email', title: 'Correo' },
    { field: 'phone', title: 'Teléfono' },
    { field: 'company', title: 'Compañía' },
  ];

  dataSource = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
  ];

  constructor(layoutService: LayoutService) {
    layoutService.setLayoutObs({ hideMainMenu: false, hideToolbar: false });

    console.log('DashboardComponent created');
  }
}
