import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>hello</div>);
  }

  componentWillMount() {
    this.props.getMessages();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages: getMessages },
    dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapDispatchToProps, mapStateToProps)(MessageList);
