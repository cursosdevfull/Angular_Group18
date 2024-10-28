import { Component, effect, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ExportOptionsComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/export-options/export-options.component';
import { OptionsComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/export-options/options/options.component';
import { PaginatorComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/paginator/paginator.component';
import { UtilsService } from '../../../../../../../../app-cdev-lib/src/lib/services/utils.service';
import { MetadataList } from '../../../../../../../../app-cdev-lib/src/lib/types/metadata.type';
import {
  ContainerComponent,
  TableComponent,
  TitleComponent,
} from '../../../../../../../../app-cdev-lib/src/public-api';
import { LayoutService } from '../../../../core/presentation/modules/layout/layout.service';
import { ParametersService } from '../../../../core/presentation/services/parameters.service';
import { SocketService } from '../../../../core/presentation/services/socket.service';
import { CourseApplication } from '../../../application/course.application';
import { FormComponent } from '../../components/form/form.component';

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

  currentPage = 0;

  parameters = inject(ParametersService);
  bottonSheet = inject(MatBottomSheet);
  dialog = inject(MatDialog);
  pageSize = this.parameters.pageSize;
  socket = inject(SocketService);

  constructor(
    layoutService: LayoutService,
    private readonly utils: UtilsService,
    private readonly application: CourseApplication
  ) {
    layoutService.setLayoutObs({ hideMainMenu: false, hideToolbar: false });

    this.loadDataPerPage(0);

    this.handlerSubscriptionSocket();

    effect(() => {
      const response = this.application.courseByPage();
      if (response) {
        this.dataSource = response.data;
        this.length = response.total;
      }
    });

    effect(
      () => {
        const courses = this.application.courses();
        if (courses && courses.length > 0) {
          this.bottonSheet.open(OptionsComponent, {
            data: {
              records: this.application.courses(),
              metadataList: this.metadataList,
              filename: 'courses',
              subject: 'list of courses',
            },
          });
          this.application.courses.set([]);
        }
      },
      { allowSignalWrites: true }
    );

    effect(() => {
      const courseTransactionEnd = this.application.courseTransactionEnd();
      if (courseTransactionEnd) {
        this.loadDataPerPage(this.currentPage);
      }
    });

    effect(() => {
      const response = this.socket.notificationData();
      if (response) {
        const action = response.action;

        if (action === 'UPDATE') {
          const { courseId, ...restData } = response.data;
          const course = this.dataSource.find(
            (item) => item.courseId === courseId
          );

          if (course) {
            course.title = restData.title;
            course.slug = restData.slug;
            course.status = restData.status;
          }
        } else if (action === 'CREATE' || action === 'DELETE') {
          this.loadDataPerPage(this.currentPage);
        }
      }
    });
  }

  loadDataPerPage(currentPage: number) {
    this.currentPage = currentPage;
    this.application.getByPage(currentPage + 1, this.pageSize);
  }

  handlerSubscriptionSocket() {
    this.socket.subscribe('course:subscribe');
    this.socket.getNotifications('NOTIFICATION_COURSE');
  }

  delete(row: any) {
    this.utils.showConfirm('¿Está seguro?').subscribe((result) => {
      if (result) {
        this.application.delete({ courseId: row.courseId });
      }
    });
  }

  exportData() {
    this.application.getAllCourses();
  }

  openForm(data: any = null) {
    const reference = this.dialog.open(FormComponent, {
      panelClass: 'modal-form-course',
      data,
      disableClose: true,
    });

    reference.afterClosed().subscribe((data) => {
      if (!data) return;
      data.courseId ? this.update(data) : this.insert(data);
    });
  }

  update(data: any) {
    this.application.update(data);
  }

  insert(data: any) {
    this.application.create(data);
  }
}
