import { Component, output } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-export-options',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBottomSheetModule],
  templateUrl: './export-options.component.html',
  styleUrl: './export-options.component.css',
})
export class ExportOptionsComponent {
  onCallToData = output();
  /*   bottonSheet = inject(MatBottomSheet);
  data = input.required<any[]>();
  metadataList = input.required<MetadataList>();
  filename = input.required<string>();
  subject = input<string>(''); */

  showOptions() {
    this.onCallToData.emit();
    /*     const reference = this.bottonSheet.open(OptionsComponent, {
      data: {
        records: this.data(),
        metadataList: this.metadataList(),
        filename: this.filename(),
        subject: this.subject(),
      },
    }); */
  }
}
