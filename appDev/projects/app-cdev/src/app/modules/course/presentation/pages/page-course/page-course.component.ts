import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ExportOptionsComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/export-options/export-options.component';
import { PaginatorComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/paginator/paginator.component';
import { MetadataList } from '../../../../../../../../app-cdev-lib/src/lib/types/metadata.type';
import {
  ContainerComponent,
  TableComponent,
  TitleComponent,
} from '../../../../../../../../app-cdev-lib/src/public-api';
import { LayoutService } from '../../../../core/presentation/modules/layout/layout.service';

@Component({
  selector: 'cdev-page-course',
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
  templateUrl: './page-course.component.html',
  styleUrl: './page-course.component.css',
})
export class PageCourseComponent {
  title = 'Cursos';
  icon = 'school';

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

  dataSource: any[] = [];

  length = 0;
  pageSize = 10;

  currentPage = 0;

  constructor(layoutService: LayoutService) {
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
}
