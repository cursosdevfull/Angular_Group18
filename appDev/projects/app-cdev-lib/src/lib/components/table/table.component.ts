import {
  Component,
  contentChildren,
  effect,
  input,
  output,
  viewChild,
} from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-om-perfect-scrollbar';

import { MetadataList } from '../../types/metadata.type';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [MatTableModule, PerfectScrollbarModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class TableComponent {
  columnDefs = contentChildren<MatColumnDef>(MatColumnDef);
  table = viewChild.required<MatTable<any>>(MatTable);
  /*   @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: false }) table!: MatTable<any>; */
  onEdit = output();

  metadataList = input.required<MetadataList>();
  dataSource = input.required<any[]>();
  /*   @Input() metadataList: MetadataList = [];
  @Input() dataSource: any[] = []; */
  displayedColumns: string[] = [];

  constructor() {
    console.log('TableComponent created');
    effect(() => {
      const metadataList = this.metadataList();
      if (metadataList) {
        this.displayedColumns = metadataList.map((md) => md.field);
      }
    });

    effect(() => {
      const columnDefs = this.columnDefs();
      if (columnDefs) {
        columnDefs.forEach((column) => {
          if (!this.displayedColumns.includes(column.name)) {
            this.table().addColumnDef(column);
            this.displayedColumns.push(column.name);
          }
        });
      }
    });
  }

  edit(row: any) {
    this.onEdit.emit(row);
  }
}
