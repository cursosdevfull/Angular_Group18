import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ContextPageSize } from 'pdfmake/interfaces';
import * as XLSX from 'xlsx';

import { ConfirmComponent } from '../components/confirm/confirm.component';
import { Info } from '../types/info.type';
import { Metadata, MetadataList } from '../types/metadata.type';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({ providedIn: 'root' })
export class UtilsService {
  constructor(private readonly dialog: MatDialog) {}

  showConfirm(message?: string) {
    const reference = this.dialog.open(ConfirmComponent, {
      panelClass: 'modal-confirm',
      data: null,
      disableClose: true,
    });

    if (message) {
      reference.componentInstance.message = message;
    }

    return reference.afterClosed();
  }

  private fromDataToExport(data: any[], metadataList: MetadataList) {
    return data.map((item) => {
      const newRow: any = {};
      for (const prop in item) {
        const md = metadataList.find((el: Metadata) => el.field === prop);
        if (md) newRow[md.title] = item[md.field];
      }

      return newRow;
    });
  }

  private async fromFileToDataUrl(filePath: string): Promise<string> {
    const response = await fetch(filePath);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }

  exportToExcel(info: Info) {
    const dataToExport = this.fromDataToExport(info.records, info.metadataList);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_json(ws, dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, info.subject);
    XLSX.writeFile(wb, `${info.filename}.xlsx`);
  }

  async exportToPdf(info: Info, subOption: 0 | 1 | 2) {
    const dataToExport = this.fromDataToExport(info.records, info.metadataList);
    const imageLogo = await this.fromFileToDataUrl(
      '/assets/avatars/logo-course.png'
    );
    const infoFormatted = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [20, 20, 20, 20],
      content: [
        this.generateHeader(imageLogo, info.filename),
        this.generateContent(dataToExport),
      ],
      footer: this.generateHeaderFooter,
      styles: this.generateStyles(),
    };

    this.generatePDF(infoFormatted, info.filename, subOption);
  }

  private generateHeaderFooter = (
    currentPage: number,
    pageCount: number,
    pageSize: ContextPageSize
  ) => {
    return [
      {
        text: `Página ${currentPage} de ${pageCount}`,
        alignment: 'center',
      },
    ];
  };

  private generateHeader(imageLogo: string, title: string) {
    return {
      margin: [0, 0, 0, 15],
      table: {
        widths: [120, 'auto', 100, 'auto'],
        body: [
          [
            {
              image: imageLogo,
              width: 100,
              border: [false, false, true, false],
              borderColor: ['#000', '#000', '#000', '#000'],
              borderWidth: 1,
            },
            {
              text: [
                this.generateRow('CursosDev', 'headerLeft'),
                this.generateRow('Av. Paulista, 1000', 'subHeaderLeft'),
                this.generateRow('Las Azucenas, Lima Perú', 'subHeaderLeft'),
                this.generateRow(
                  'Teléfono: (51-1) 997-456-789',
                  'subHeaderLeft'
                ),
                this.generateRow('info@cursos-dev.com', 'subHeaderLeft'),
                this.generateRow('www.cursos-dev.com', 'subHeaderLeft'),
              ],
              border: [false, false, false, false],
            },
            {
              text: '',
              border: [false, false, false, false],
            },
            {
              text: 'Reporte: ' + title,
              border: [false, false, false, false],
              style: 'titleReport',
            },
          ],
        ],
      },
    };
  }

  private generateStyles() {
    return {
      headerLeft: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 16,
        color: '#3c3b40',
      },
      subHeaderLeft: {
        fontFamily: 'Verdana',
        fontSize: 10,
        height: 16,
        color: '#3c3b40',
      },
      titleReport: {
        fontFamily: 'Verdana',
        fontSize: 15,
        height: 16,
        color: '#3c3b40',
      },
      header: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 14,
        color: '#3c3b40',
        bold: true,
      },
    };
  }

  private generateRow(text: string, style: string) {
    const row: { text: string; style?: string } = { text: `${text}\n` };
    if (style) row.style = style;
    return row;
  }

  private generateContent(data: any[]) {
    const body = data.map((el) =>
      Object.keys(el).map((prop) => this.generateRowData(el[prop]))
    );

    const rowHeaders: any = Object.keys(data[0]).map((prop) => [
      {
        border: [false, false, false, false],
        text: prop,
        style: 'header',
      },
    ]);

    const quantityColumns = rowHeaders.length;

    const widths = Array.from(Array(quantityColumns).keys()).map(
      () => Math.floor(100 / quantityColumns) + '%'
    );

    body.unshift(rowHeaders);

    return {
      margin: [0, 0, 0, 0],
      table: {
        widths,
        body,
      },
    };
  }

  private generateRowData(text: string) {
    return {
      text,
      border: [false, false, false, false],
    };
  }

  private generatePDF(
    infoFormatted: any,
    filename: string,
    subOption: 0 | 1 | 2
  ) {
    const documentGenerated = pdfMake.createPdf(infoFormatted);
    switch (subOption) {
      case 0:
        documentGenerated.open();
        break;
      case 1:
        documentGenerated.download(`${filename}.pdf`);
        break;
      case 2:
        documentGenerated.print();
        break;
      default:
        break;
    }
  }
}
