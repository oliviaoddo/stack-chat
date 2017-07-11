import React, { Component } from 'react';
import { connect } from 'react-redux';
import {writeChannel, postChannel} from '../store/index';


function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

const mapStateToProps = (state, ownProps) => ({
    newChannelEntry: state.writeChannel.newChannelEntry,
    history: ownProps.history
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange(event){
    dispatch(writeChannel(event.target.value))

  },
  handleSubmit(event){
    event.preventDefault();
    dispatch(postChannel({name: event.target.channelName.value}, ownProps.history))
    dispatch(writeChannel(''));
  }
})
/** Write your `connect` component below! **/
export default connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
