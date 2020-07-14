import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMessages } from '../actions';

import Message from '../components/message';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMessages(this.props.channel);
  }

  componentDidMount() {
    setInterval(() => this.props.getMessages(this.props.channel), 500);
  }

  render() {
    return this.props.messages.map((message) => {
      return <Message message={message} key={message.created_at} ref={this.myRef} />;
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages: getMessages },
    dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.channel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
