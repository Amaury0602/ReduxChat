export default function(state = null, action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}
