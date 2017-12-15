import { createStore, applyMiddleware, combineReducers } from 'redux';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import dialogReducer from '../Dialog/reducer';

export const middleware = [];

const rootReducer = combineReducers({
  dialog: dialogReducer
})

if (process.env.NODE_ENV !== 'production') {
  middleware.push(reduxImmutableStateInvariant());
}

export default function configureStore () {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
