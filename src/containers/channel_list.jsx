import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeChannel } from '../actions';

class ChannelList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    this.props.changeChannel(e.target.innerText);
  };

  render() {
    return (
      <ul>
        <li onClick={this.handleClick}>general</li>
        <li onClick={this.handleClick}>europe</li>
        <li onClick={this.handleClick}>feedback</li>
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeChannel: changeChannel },
    dispatch);
}

export default connect(null, mapDispatchToProps)(ChannelList);
