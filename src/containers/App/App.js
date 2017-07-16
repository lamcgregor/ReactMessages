import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChatLog, setActiveMessage } from '../../actions/messages';
import { getMembersList } from '../../actions/members';

import MessageList from '../../components/MessageList/MessageList';

class App extends Component {
  componentDidMount() {
    this.props.getChatLog();
    this.props.getMembersList();
  }
  render() {
    return (
      <MessageList messages={this.props.messages} members={this.props.members} onHover={this._handleHover.bind(this)} />
    );
  }
  _handleHover(id) {
    console.log('select', id);
    this.props.messageHover(id);
  }
}

const mapStateToProps = state => {
  const store = {};
  for(let i = 0; i < state.members.results.length; i++) {
    let item = state.members.results[i];
    store[item.id] = item;
  }
  state.messages.results.sort((a, b) => {
    let x = new Date(a.timestamp),
        y = new Date(b.timestamp);
    return y.getTime() - x.getTime();
  });
  return {
    messages: state.messages,
    members: store
  };
};

const mapDispatchToProps = dispatch => ({
  getChatLog: () => dispatch(getChatLog()),
  getMembersList: () => dispatch(getMembersList()),
  messageHover: (id) => dispatch(setActiveMessage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
