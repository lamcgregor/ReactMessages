import { messages } from './reducers/messages-reducer';
import * as MessagesActions from './actions/messages';
import { members } from './reducers/members-reducer';
import * as MembersActions from './actions/members';

it('should set messages in the store', () => {
  const data = {
    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    timestamp: '2017-02-09T04:27:38Z'
  };

  const updatedStore = messages({}, {
    type: MessagesActions.MESSAGES_LOADED,
    payload: data
  });

  expect(updatedStore.results).toEqual(data);
});

it('should set members in the store', () => {
  const data = {
    "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
    "firstName": "Martin",
    "lastName": "Bradley",
    "email": "mbradley0@google.it",
    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "ip": "166.124.172.160"
  };

  const updatedStore = members({}, {
    type: MembersActions.MEMBERS_LOADED,
    payload: data
  });

  expect(updatedStore.results).toEqual(data);
});
