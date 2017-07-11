import socket from '../socket';
import axios from 'axios';
import initialState from './state';

const GET_NEW_CHANNEL = 'GET__NEW_CHANNEL';
const GET_CHANNELS = 'GET_CHANNELS';


export function getChannels (channel) {
  const action = { type: GET_CHANNELS, channel };
  return action;
}

export function getChannel (channel) {
  const action = { type: GET_NEW_CHANNEL, channel };
  return action;
}



export function fetchChannels () {

  return function thunk (dispatch) {
    return axios.get('/api/channels')
      .then(res => res.data)
      .then(channels => {
        const action = getChannels(channels);
        dispatch(action);
      });
  }
}

export function postChannel (channel, history) {
  return function thunk (dispatch) {
    return axios.post('/api/channels', channel)
      .then(res => res.data)
      .then(newChannel => {
        const action = getChannel(newChannel);
        dispatch(action);
        socket.emit('new-channel', newChannel);
        history.push(`channels/${newChannel.id}`);
      });
  }

}


export default function channelReducer (state = initialState, action) {

  switch (action.type) {
    case GET_NEW_CHANNEL:{
      return {
        ...state,
        channels: [...state.channels, action.channel]
      }
    }
    case GET_CHANNELS:
      return {
        ...state,
        channels: action.channel
      }

    default:
      return state;
  }

}
