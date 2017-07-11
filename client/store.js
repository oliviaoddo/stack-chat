// import axios from 'axios';
// import { createStore, applyMiddleware, combine } from 'redux';
// import createLogger from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import socket from './socket';

// // INITIAL STATE

// const initialState = {
//   messages: [],
//   name: 'Reggie',
//   newMessageEntry: '',
//   newChannelEntry: '',
//   channels: []
// };


// // REDUCER

// *
//  * Whoa! What is this { ...state } business?!?
//  * This is the spread operator like we've seen before - but this time, we're using it with an Object!
//  * When we use the spread operator on an object, it extracts all of the key-value pairs on that object into a new object!
//  * Sound familiar? It acts like Object.assign!
//  *
//  * For example:
//  *
//  *    const obj1 = { a: 1 };
//  *    const obj2 = { ...obj1, b: 2  }
//  *    console.log(obj2) // { a: 1, b: 2 }
//  *
//  * This is the same result we would have gotten if we had said:
//  *
//  *    const obj2 = Object.assign({}, obj1, { b: 2 })
//  *
//  * However, it's much less verbose!
//  * Is there anything the spread operator DOESN'T do?!?
//  *
//  * Note: this is still an experimental language feature (though it is on its way to becoming official).
//  * We can use it now because we are using a special babel plugin with webpack (babel-preset-stage-2)!

// function reducer (state = initialState, action) {

//   switch (action.type) {

//     case UPDATE_NAME:
//       return {
//         ...state,
//         name: action.name
//       };

//     case GET_MESSAGES:
//       return {
//         ...state,
//         messages: action.messages
//       };

//     case GET_MESSAGE:
//       return {
//         ...state,
//         messages: [...state.messages, action.message]
//       };

//     case WRITE_MESSAGE:
//       return {
//         ...state,
//         newMessageEntry: action.content
//       };
//     case WRITE_CHANNEL:
//       return{
//         ...state,
//         newChannelEntry: action.name
//       }
//     case GET_NEW_CHANNEL:{
//       return {
//         ...state,
//         channels: [...state.channels, action.channel]
//       }
//     }
//     case GET_CHANNELS:
//       return {
//         ...state,
//         channels: action.channel
//       }

//     default:
//       return state;
//   }

// }

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(
//     thunkMiddleware,
//     createLogger()
//   ))
// );

// export default store;
