import { getMessages } from '../data';

export const MESSAGES_LOADING = 'MESSAGES_LOADING';
export const MESSAGES_LOADED = 'MESSAGES_LOADED';
export const MESSAGES_FAILED = 'MESSAGES_FAILED';
export const SELECT_MESSAGE = 'SELECT_MESSAGE';

const messagesLoading = () => ({
  type: MESSAGES_LOADING,
  payload: true
});

const messagesLoaded = data => ({
  type: MESSAGES_LOADED,
  payload: data
});

const messagesFailed = error => ({
  type: MESSAGES_FAILED,
  payload: error
});

export const setActiveMessage = id => ({
  type: SELECT_MESSAGE,
  payload: id
});

export const getChatLog = () => dispatch => {
  dispatch(messagesLoading());
  return getMessages()
    .then(response => {
      dispatch(messagesLoaded(response));
    })
    .catch(error => dispatch(messagesFailed(error)));
};