import messages from '../messages';

export function getMessages() {
  return {
    type: 'GET_MESSAGES',
    payload: messages
  };
}
