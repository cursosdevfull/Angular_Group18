import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ExportOptionsComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/export-options/export-options.component';
import { PaginatorComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/paginator/paginator.component';
import { UtilsService } from '../../../../../../../../app-cdev-lib/src/lib/services/utils.service';
import { MetadataList } from '../../../../../../../../app-cdev-lib/src/lib/types/metadata.type';
import {
  ContainerComponent,
  TableComponent,
  TitleComponent,
} from '../../../../../../../../app-cdev-lib/src/public-api';
import { LayoutService } from '../../../../core/presentation/modules/layout/layout.service';
import { CourseApplication } from '../../../application/course.application';
import { Course } from '../../../domain/course';

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
    { field: 'courseId', title: 'ID' },
    { field: 'title', title: 'Título' },
    { field: 'slug', title: 'Slug' },
    { field: 'status', title: 'Estado' },
  ];

  dataOriginal: any[] = [];
  dataSource: any[] = [];

  length = 0;
  pageSize = 10;

  currentPage = 0;

  constructor(
    layoutService: LayoutService,
    private readonly utils: UtilsService,
    private readonly application: CourseApplication
  ) {
    layoutService.setLayoutObs({ hideMainMenu: false, hideToolbar: false });
    application.getAllCourses().then((data: Course[]) => {
      this.dataOriginal = data.map((item: Course) => item.properties);
      this.length = this.dataOriginal.length;
      this.loadDataPerPage(0);
    });
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
