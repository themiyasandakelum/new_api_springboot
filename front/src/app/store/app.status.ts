import * as auth from './reducer/auth.reducer';


export interface AppState {
  authState: auth.State;
}