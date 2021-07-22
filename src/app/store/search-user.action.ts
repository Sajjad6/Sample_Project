import { Action } from '@ngrx/store';
import { UserModel } from '../model/user-model';

export const SEARCH_USER = 'SEARCH_USER';

export class SearchUserAction implements Action {
  readonly type = SEARCH_USER;
  // payload: UserModel;
  // payload: { firstName: string }

  constructor(public payload: UserModel) {}
}
