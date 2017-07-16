import { combineReducers } from 'redux';
import { messages } from './messages-reducer';
import { members } from './members-reducer';

export default combineReducers({
  messages,
  members
});