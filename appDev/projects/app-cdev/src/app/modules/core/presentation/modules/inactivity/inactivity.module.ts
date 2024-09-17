import { ModuleWithProviders, NgModule } from '@angular/core';

import { TInactivityConfig } from './inactivity.constant';
import { INACTIVITY_TOKEN } from './inactivity.token';

@NgModule()
export class InactivityModule {
  static forRoot(
    config: TInactivityConfig
  ): ModuleWithProviders<InactivityModule> {
    return {
      ngModule: InactivityModule,
      providers: [{ provide: INACTIVITY_TOKEN, useValue: config }],
    };
  }
}
