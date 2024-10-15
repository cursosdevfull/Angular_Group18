import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ContainerComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/container/container.component';
import { PaginatorComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/paginator/paginator.component';
import { UtilsService } from '../../../../../../../../app-cdev-lib/src/lib/services/utils.service';
import { MetadataList } from '../../../../../../../../app-cdev-lib/src/lib/types/metadata.type';
import {
  ExportOptionsComponent,
  TableComponent,
  TitleComponent,
} from '../../../../../../../../app-cdev-lib/src/public-api';
import { LayoutService } from '../../../../core/presentation/modules/layout/layout.service';

@Component({
  selector: 'cdev-page-user',
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
    PaginatorComponent,
    ExportOptionsComponent,
  ],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css',
})
export class PageUserComponent {
  title = 'Usuarios';
  icon = 'person';

  metadataList: MetadataList = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'email', title: 'Correo' },
    { field: 'phone', title: 'Teléfono' },
    { field: 'company', title: 'Compañía' },
  ];

  dataOriginal = [
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
      id: 5,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 6,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 7,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 8,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 9,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 10,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 11,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 12,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 13,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 14,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 15,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 16,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 17,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 18,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 19,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 20,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 21,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 22,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 23,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 24,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 25,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 26,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 27,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 28,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 29,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 30,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 31,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 32,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 33,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 34,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 35,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 36,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 37,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 38,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 39,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 40,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 41,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 42,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 43,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 44,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
    {
      id: 45,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123-456-7890',
      company: 'Company A',
    },
    {
      id: 46,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '123-456-7890',
      company: 'Company B',
    },
    {
      id: 47,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '123-456-7890',
      company: 'Company C',
    },
    {
      id: 48,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '123-456-7890',
      company: 'Company D',
    },
  ];

  dataSource: any[] = [];

  length = 0;
  pageSize = 10;

  currentPage = 0;

  constructor(
    layoutService: LayoutService,
    private readonly utils: UtilsService
  ) {
    layoutService.setLayoutObs({ hideMainMenu: false, hideToolbar: false });
    this.length = this.dataOriginal.length;
    console.log('DashboardComponent created');
    this.loadDataPerPage(0);
  }

  loadDataPerPage(currentPage: number) {
    this.currentPage = currentPage;
    this.dataSource = this.dataOriginal.slice(
      this.currentPage * this.pageSize,
      (this.currentPage + 1) * this.pageSize
    );
  }

  delete(row: any) {
    this.utils.showConfirm('¿Está seguro?').subscribe((result) => {
      if (result) {
        this.dataOriginal = this.dataOriginal.filter(
          (item) => item.id !== row.id
        );
        this.length = this.dataOriginal.length;
        this.loadDataPerPage(this.currentPage);
      }
    });
  }
}
