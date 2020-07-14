import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="message">
        <div className="author-date">
          {this.props.message.created_at}
          {this.props.message.author}
        </div>
        <div className="content">
          {this.props.message.content}
        </div>
      </div>
    );
  }
}

export default Message;
