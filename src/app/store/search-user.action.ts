import { Action } from '@ngrx/store';
import { UserModel } from '../model/user-model';

export const SEARCH_USER = 'SEARCH_USER';

export class SearchUserAction implements Action {
  readonly type = SEARCH_USER;

  constructor(public payload: UserModel) {}
}
