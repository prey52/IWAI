import { createStore, combineReducers, applyMiddleware, compose, Store, AnyAction } from 'redux';
import todoReducer, { State } from './ReduxReducers.ts';
import { thunk } from 'redux-thunk';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<State, any, any, any>(
  todoReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

/*const store = createStore(todoReducer);
export default store;*/

