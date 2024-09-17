import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import player from 'lottie-web';
import { provideLottieOptions } from 'ngx-lottie';

import { routes } from './app.routes';
import { CONSTANT_INACTIVITY_CONFIG } from './modules/core/presentation/modules/inactivity/inactivity.constant';
import { InactivityModule } from './modules/core/presentation/modules/inactivity/inactivity.module';
import { CONSTANT_LAYOUT_CONFIG } from './modules/core/presentation/modules/layout/layout.constant';
import { LayoutModule } from './modules/core/presentation/modules/layout/layout.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideLottieOptions({
      player: () => player,
    }),
    importProvidersFrom(InactivityModule.forRoot(CONSTANT_INACTIVITY_CONFIG)),
    importProvidersFrom(LayoutModule.forRoot(CONSTANT_LAYOUT_CONFIG)),
  ],
};
