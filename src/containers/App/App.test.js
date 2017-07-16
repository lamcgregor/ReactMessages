import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Members from '../../reducers/members-reducer';
import * as Messages from '../../reducers/messages-reducer';

const props = {
  messages: Messages.initialState,
  members: Members.initialState,
  getChatLog: () => true,
  getMembersList: () => true,
  messageHover: () => true
};

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent {...props} />, div);
});
