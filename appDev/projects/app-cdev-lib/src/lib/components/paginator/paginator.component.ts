import { Component, input, output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'lib-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  length = input.required<number>();
  pageSize = input.required<number>();
  onChangePage = output<number>();

  pageChange(event: PageEvent) {
    console.log('pageIndex', event.pageIndex);
    this.onChangePage.emit(event.pageIndex);
  }
}
