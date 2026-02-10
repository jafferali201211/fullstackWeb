import { Routes } from '@angular/router';
import { authGuard } from './practice/core/auth-guard';
import { adminGuard } from './practice/core/admin-guard';
import { prefetchResolver } from './practice/core/prefetch-resolver';
import { RegisterForms } from './practice/forms-06/register-forms/register-forms';

// Routes -> routes is a array of route object used for route configuration or define navigation

export const routes: Routes = [
    {   path:'',
        pathMatch:'full',
        redirectTo:'login'
    },
    

{
    path: 'rxjs/switchmap-realtime-search',
    loadComponent: () =>
      import('./practice/rxjs-07/rxjs-switchmap-realtime-search-demo/rxjs-switchmap-realtime-search-demo')
        .then(m => m.RxjsSwitchmapRealtimeSearchDemo),
  },
  {
    path: 'rxjs/mergemap-parallel-save',
    loadComponent: () =>
      import('./practice/rxjs-07/rxjs-mergemap-parallel-save-demo/rxjs-mergemap-parallel-save-demo')
        .then(m => m.RxjsMergemapParallelSaveDemo),
  },
  {
    path: 'rxjs/concatmap-queue-save',
    loadComponent: () =>
      import('./practice/rxjs-07/rxjs-concatmap-queue-save-demo/rxjs-concatmap-queue-save-demo')
        .then(m => m.RxjsConcatmapQueueSaveDemo),
  },
  {
    path: 'rxjs/exhaustmap-submit',
    loadComponent: () =>
      import('./practice/rxjs-07/rxjs-exhaustmap-submit-demo/rxjs-exhaustmap-submit-demo')
        .then(m => m.RxjsExhaustmapSubmitDemo),
  },
  {
    path: 'rxjs/forkjoin-combinelatest',
    loadComponent: () =>
      import('./practice/rxjs-07/rxjs-forkjoin-combinelatest-demo/rxjs-forkjoin-combinelatest-demo')
        .then(m => m.RxjsForkjoinCombinelatestDemo),
        },

    {   path:'login',
        loadComponent:()=>import('./practice/routing-guards-12/route-login-demo/route-login-demo').then(m=>m.RouteLoginDemo)
    },
    {   path:'dashboard',
        canActivate:[authGuard],
        resolve:{prefetch:prefetchResolver},
        loadComponent:()=>import('./practice/routing-guards-12/route-dashboard-demo/route-dashboard-demo').then(m=>m.RouteDashboardDemo)
    },
    {
    path: 'register',
    component:RegisterForms,
   
  },
    {
        path:'**',
        loadComponent:()=>import('./practice/routing-guards-12/route-not-found-demo/route-not-found-demo').then(m=>m.RouteNotFoundDemo)
    },
   

];
