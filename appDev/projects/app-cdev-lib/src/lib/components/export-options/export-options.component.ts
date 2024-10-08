import { Component, inject, input } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MetadataList } from '../../types/metadata.type';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'lib-export-options',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBottomSheetModule],
  templateUrl: './export-options.component.html',
  styleUrl: './export-options.component.css',
})
export class ExportOptionsComponent {
  bottonSheet = inject(MatBottomSheet);
  data = input.required<any[]>();
  metadataList = input.required<MetadataList>();
  filename = input.required<string>();
  subject = input<string>('');

  showOptions() {
    const reference = this.bottonSheet.open(OptionsComponent, {
      data: {
        records: this.data(),
        metadataList: this.metadataList(),
        filename: this.filename(),
        subject: this.subject(),
      },
    });
  }
}
