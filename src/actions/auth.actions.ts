import { Action } from '@ngrx/store';

export const SET_TOKEN  = '[Auth] SetToken';
export const RESET      = '[Auth] Reset';
export const SET_LOGGED_IN      = '[Auth] SetLogged';
export const SET_LOGGED_OUT     = '[Auth] SetLoggedOut';

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export class LogIn implements Action {
    readonly type = SET_LOGGED_IN ;
  }

export class LogOut implements Action {
    readonly type = SET_LOGGED_OUT ;
  }
export class Reset implements Action {
  readonly type = RESET;
}



export type All
  = Reset
  | LogIn
  | LogOut
  | SetToken;
