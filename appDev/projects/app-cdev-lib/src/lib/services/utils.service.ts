import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

import { Info } from '../types/info.type';
import { Metadata, MetadataList } from '../types/metadata.type';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({ providedIn: 'root' })
export class UtilsService {
  constructor() {}

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
      content: [this.generateHeader(imageLogo, info.filename)],
    };

    this.generatePDF(infoFormatted, info.filename, subOption);
  }

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
          ],
        ],
      },
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
