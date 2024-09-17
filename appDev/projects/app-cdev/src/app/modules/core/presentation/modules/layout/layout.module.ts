import { ModuleWithProviders, NgModule } from '@angular/core';

import { LAYOUT_TOKEN } from './layout.token';

@NgModule()
export class LayoutModule {
  static forRoot(config: any): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [{ provide: LAYOUT_TOKEN, useValue: config }],
    };
  }
}
