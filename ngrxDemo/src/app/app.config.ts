import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { provideHttpClient } from '@angular/common/http';
import { PostsEffects } from './posts/posts.effects';
import { postsReducer } from './posts/posts.reducer';
import { usersReducer } from './users/usersReducer.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    provideStore({users:usersReducer}),
    // provideEffects([PostsEffects]),
  
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
