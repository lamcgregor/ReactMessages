import React from 'react';
import { formatDate } from '../utilities/index';

import './Message.styles.css';

const Message = ({ id, message, timestamp, member, onHover, activeMessage }) => {
  return(
    <div className='message' onMouseEnter={() => onHover(id)}>
      <img className='image' src={member.avatar || 'http://placehold.it/100/100'} alt={member.email} />
      <span className='content'>
        {message}
      </span>
      {activeMessage === id &&
        <span className='email'>
          {member.email}
        </span>
      }
      <span className='date'>
        {formatDate(timestamp)}
      </span>
    </div>
  );
};

export default Message;