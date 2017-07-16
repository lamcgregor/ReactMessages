import React from 'react';
import Message from './Message';

import './MessageList.styles.css';

const user = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
  ip: ''
};

const MessageList = ({ messages, members, onHover }) => {
  const content = messages.results.map((item, i) => {
    const member = Object.assign({}, user, members[item.userId]);
    return (
      <Message {...item} onHover={onHover} activeMessage={messages.activeMessage} key={i} member={member} />
    )
  });
  return (
    <div className='message-list'>
      <h1 className='title'>Messages</h1>
      {messages.isFetching &&
        <div>Loading...</div>
      }
      {content}
    </div>
  );
};

export default MessageList;