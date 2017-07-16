import * as actions from '../actions/messages';

export const initialState = {
  results: [],
  isFetching: false,
  error: false,
  activeMessage: false
};

export const messages = (state = initialState, action) => {
  switch(action.type) {
    case actions.MESSAGES_LOADING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case actions.MESSAGES_LOADED:
      return Object.assign({}, state, {
        results: action.payload,
        isFetching: false
      });
    case actions.MESSAGES_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isFetching: false
      });
    case actions.SELECT_MESSAGE:
      return Object.assign({}, state, {
        activeMessage: action.payload
      });
    default:
      return state;
  }
};
