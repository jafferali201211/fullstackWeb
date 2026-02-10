import { Injectable ,signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // WHY: signal gives reactive state without RxJS boilerplate.
  private _isLoggedIn =signal(false);

  // WHY: expose read-only state for components/guard
  isLoggedIn =this._isLoggedIn.asReadonly();

  // WHY: role-based guard needs role info.
  private _role = signal<'user'|'admin'>('user')
  role=this._role.asReadonly();

  login(asAdmin =false){
    // WHY: central point to update auth state.
    this._isLoggedIn.set(true);
    this._role.set(asAdmin? 'admin' : 'user');
  }

  logout(){
    this._isLoggedIn.set(false);
    this._role.set('user')
  }

  
}
