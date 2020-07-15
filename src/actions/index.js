export function getMessages(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      console.log(channel);
      return {
        type: 'GET_MESSAGES',
        payload: data.messages
      };
    });
}

export function sendMessage(channel, author, content, createdAt) {
  const body = { author: author, content: content, created_at: createdAt };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: "SEND_MESSAGE",
    payload: promise
  };
}

export function changeChannel(channel) {
  return {
    type: "CHANGE_CHANNEL",
    payload: channel
  };
}
