import { HttpInterceptorFn } from '@angular/common/http';
import {tap} from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const started = performance.now();
  const requestId=Math.random().toString(16).slice(2);

  console.log(`%c[HTTP ${requestId}] -> ${req.method} ${req.urlWithParams}`,'color:#1976d2;font-weight:bold');

  
  return next(req).pipe(tap({
    next:(event:any)=>{
      
  // HttpResponse will come through here (plus other events)
        // WHY: log response completion time
        // We keep it simple; in real apps check event.type

    },
    error: (err)=>{
      const ms =Math.round(performance.now() - started);
      
console.log(
          `%c[HTTP ${requestId}] ✖ ERROR (${ms}ms)`,
          'color:#d32f2f;font-weight:bold',
          err
        );
    },
    complete:()=>{
      
const ms = Math.round(performance.now() - started);
        console.log(
          `%c[HTTP ${requestId}] ✓ DONE (${ms}ms)`,
          'color:#2e7d32;font-weight:bold'
        );

    }
  }));
};



