import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection ,importProvidersFrom } from '@angular/core';
import { provideRouter,withInMemoryScrolling,withPreloading,withComponentInputBinding ,TitleStrategy} from '@angular/router';
import {provideHttpClient,withInterceptors} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { loggingInterceptor } from './practice/core/logging-interceptor';
// import { SelectivePreload } from './preloading/selective-preload.strategy';
// import { AppTitleStrategy } from './title/app-title.strategy';




export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(ReactiveFormsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
      withComponentInputBinding(),
      // withPreloading(SelectivePreload)

    ),
    
    // WHY: HttpClient for real API calls in standalone apps
    // WHY: interceptor to log request lifecycle + timing for debugging

    provideHttpClient(withInterceptors([loggingInterceptor]))
    // { provide: TitleStrategy, useClass: AppTitleStrategy }
  ]
};
