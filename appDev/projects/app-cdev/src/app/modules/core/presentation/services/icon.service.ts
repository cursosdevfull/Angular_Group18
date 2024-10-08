import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

type Icon = {
  name: string;
  path: string;
};

export type Icons = Icon[];

@Injectable({ providedIn: 'root' })
export class IconService {
  private iconsList: Icons = [
    { name: 'excel', path: '../../assets/icons/excel.svg' },
    { name: 'pdf', path: '../../assets/icons/pdf.svg' },
  ];

  constructor(
    private readonly domSatinizer: DomSanitizer,
    private readonly matIconRegistry: MatIconRegistry
  ) {
    for (const icon of this.iconsList) {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSatinizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    }
  }
}
