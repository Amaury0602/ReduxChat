import React, { Component } from 'react';

class ChannelList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    console.log(e.target.innerText);
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

export default ChannelList;
