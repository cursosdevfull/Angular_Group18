import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  SimpleChanges,
  ViewChild,
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
  @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: false }) table!: MatTable<any>;

  @Input() metadataList: MetadataList = [];
  @Input() dataSource: any[] = [];
  displayedColumns: string[] = [];

  constructor() {
    console.log('TableComponent created');
  }

  ngOnChanges(changes: SimpleChanges) {
    const { metadataList, dataSource } = changes;
    if (metadataList) {
      //this.metadataList = metadataList.currentValue;
      this.displayedColumns = this.metadataList.map(
        (metadata) => metadata.field
      );
      console.log('Metadata list', this.metadataList);
    }

    if (dataSource) {
      this.dataSource = dataSource.currentValue;
    }
  }

  ngAfterViewInit() {
    if (!this.columnDefs || this.dataSource.length === 0) return;
    console.log('Column defs', this.columnDefs);
    this.columnDefs.forEach((columnDef, index) => {
      if (!this.displayedColumns.includes(columnDef.name)) {
        this.table.addColumnDef(columnDef);
        this.displayedColumns.push(columnDef.name);
        console.log('Table Definition', this.table);
      }
    });

    console.log('Displayed columns', this.displayedColumns);

    console.log('TableComponent view initialized');
  }
}
