import * as actions from '../actions/members';

export const initialState = {
  results: [],
  isFetching: false,
  error: false
};

export const members = (state = initialState, action) => {
  switch(action.type) {
    case actions.MEMBERS_LOADING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case actions.MEMBERS_LOADED:
      return Object.assign({}, state, {
        results: action.payload,
        isFetching: false
      });
    case actions.MEMBERS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isFetching: false
      });
    default:
      return state;
  }
};
