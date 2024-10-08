import { Component, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { UtilsService } from '../../../services/utils.service';
import { Info } from '../../../types/info.type';

type SubOption = 0 | 1 | 2;
type Option = 'EXCEL' | 'PDF';

@Component({
  selector: 'lib-options',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
})
export class OptionsComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private readonly info: Info,
    private readonly matBottomSheetRef: MatBottomSheetRef,
    private readonly utilsService: UtilsService
  ) {}

  exportTo(optionSelected: Option, subOptionSelected: SubOption = 0) {
    if (optionSelected === 'EXCEL') {
      this.utilsService.exportToExcel(this.info);
    } else if (optionSelected === 'PDF') {
      this.utilsService.exportToPdf(this.info, subOptionSelected);
    }
    this.matBottomSheetRef.dismiss();
    console.log('optionSelected', optionSelected);
    console.log('subOptionSelected', subOptionSelected);
  }
}
