export function getMessages() {
  fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json())
    .then((data) => {
      console.log(data.messages);
      return {
        type: 'GET_MESSAGES',
        payload: data.messages
      };
    });
}
