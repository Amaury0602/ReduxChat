export default function(state = "general", action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case 'CHANGE_CHANNEL':
      return action.payload;
    default:
      return state;
  }
}
