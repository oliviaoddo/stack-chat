import initialState from './state';

const WRITE_CHANNEL = 'WRITE_CHANNEL';


export function writeChannel (name) {
  const action = { type: WRITE_CHANNEL, name };
  return action;
}

export default function writeChannelReducer (state = initialState, action) {

  switch (action.type) {
    case WRITE_CHANNEL:
      return{
        ...state,
        newChannelEntry: action.name
      };
    default:
      return state;
  }

}
