import { Component, effect, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PaginatorComponent } from '../../../../../../../../app-cdev-lib/src/lib/components/paginator/paginator.component';
import { UtilsService } from '../../../../../../../../app-cdev-lib/src/lib/services/utils.service';
import { MetadataList } from '../../../../../../../../app-cdev-lib/src/lib/types/metadata.type';
import {
  ContainerComponent,
  ExportOptionsComponent,
  OptionsComponent,
  TableComponent,
  TitleComponent,
} from '../../../../../../../../app-cdev-lib/src/public-api';
import { LayoutService } from '../../../../core/presentation/modules/layout/layout.service';
import { ParametersService } from '../../../../core/presentation/services/parameters.service';
import { ScheduleApplication } from '../../../application/schedule.application';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'cdev-page-schedule',
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
  templateUrl: './page-schedule.component.html',
  styleUrl: './page-schedule.component.css',
})
export class PageScheduleComponent {
  title = 'Programaciones';
  icon = 'schedule';

  metadataList: MetadataList = [
    { field: 'scheduleId', title: 'ID' },
    { field: 'courseId', title: 'Course' },
    { field: 'title', title: 'Título' },
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

  constructor(
    layoutService: LayoutService,
    private readonly utils: UtilsService,
    private readonly application: ScheduleApplication
  ) {
    layoutService.setLayoutObs({ hideMainMenu: false, hideToolbar: false });
    this.loadDataPerPage(0);

    effect(() => {
      const response = this.application.scheduleByPage();
      if (response) {
        this.dataSource = response.data;
        this.length = response.total;
      }
    });

    effect(() => {
      const schedules = this.application.schedules();
      if (schedules && schedules.length > 0) {
        this.bottonSheet.open(OptionsComponent, {
          data: {
            records: this.application.schedules(),
            metadataList: this.metadataList,
            filename: 'schedules',
            subject: 'list of schedules',
          },
        });
      }
    });

    effect(() => {
      const courseTransactionEnd = this.application.scheduleTransactionEnd();
      if (courseTransactionEnd) {
        this.loadDataPerPage(this.currentPage);
      }
    });
  }

  loadDataPerPage(currentPage: number) {
    this.currentPage = currentPage;
    this.application.getByPage(currentPage + 1, this.pageSize);
  }

  delete(row: any) {
    this.utils.showConfirm('¿Está seguro?').subscribe((result) => {
      if (result) {
        this.application.delete({ scheduleId: row.scheduleId });
      }
    });
  }

  exportData() {
    this.application.getAllSchedules();
  }

  openForm(data: any = null) {
    const reference = this.dialog.open(FormComponent, {
      panelClass: 'modal-form-schedule',
      data,
      disableClose: true,
    });

    reference.afterClosed().subscribe((data) => {
      if (!data) return;
      data.scheduleId ? this.update(data) : this.insert(data);
    });
  }

  update(data: any) {
    this.application.update(data);
  }

  insert(data: any) {
    this.application.create(data);
  }
}
