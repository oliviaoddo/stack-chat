import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import store from '../store/index';

export default class Messages extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    const channelId = Number(this.props.match.params.channelId.slice(1)) // because it's a string "1", not a number!
    const messages = this.state.messages.messages;
    const filteredMessages = messages.filter(message => message.channelId === channelId);
    console.log(filteredMessages)
    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
    );
  }
}
