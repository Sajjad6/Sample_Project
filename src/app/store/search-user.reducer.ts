import * as SearchUserActions from './search-user.action';

const initialState = {
  userDetail: {
    firstName: 'Sajjad',
    lastName: 'Akram',
    email: 'sajjadakram6@gmail.com',
    age: 25
  }
};

export function searchUserReducer(state = initialState, action: SearchUserActions.SearchUserAction) {
  switch (action.type) {
    case SearchUserActions.SEARCH_USER:
      return {
        ...state,
        userDetail: action.payload
      };
    default:
      return state;
  }
}
