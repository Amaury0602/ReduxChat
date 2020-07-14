import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.props.channel, "me", this.state.input, Date.now().toString());
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <form action="#" method="#" className="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label htmlFor="message">Message : </label>
        <input type="text" id="name" name="user_name" />
        <button type="submit"> Send </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage: sendMessage },
    dispatch);
}

function mapStateToProps(state) {
  return {
    channel: state.channel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
