import initialState from './state';

const WRITE_MESSAGE = 'WRITE_MESSAGE';


export function writeMessage (content) {
  console.log('updating message change', content);
  const action = { type: WRITE_MESSAGE, content };
  return action;
}

export default function writeMessageReducer (state = initialState, action) {

  switch (action.type) {
    case WRITE_MESSAGE:
      return {
        ...state,
        newMessageEntry: action.content
      };
    default:
      return state;
  }

}
