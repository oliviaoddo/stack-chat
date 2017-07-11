
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import store from '../store/index';
import { connect } from 'react-redux';


function ChannelList(props) {
    return (
      <ul>
      {
        props.channels.map(channel =>{
          return (
             <li key={channel.id}>
              <NavLink to={`/channels/:${channel.id}`}>
                <span>#{channel.name}</span>
                <span className="badge">{ props.messages.filter(message => message.channelId === channel.id).length }</span>
              </NavLink>
            </li>
          )
        })
      }
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    );
}

/** Write your `connect` component below! **/
const mapStateToProps = (state) => {
  return {
    channels: state.channels.channels,
    messages: state.messages.messages
  }
}

export default withRouter(connect(mapStateToProps)(ChannelList));
