/**
 * The combination of "state" and "reducers" that is injected into your application via the Provider.
 * This is what will give our components access to the state data maintained by redux.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import state from './state';

export default createStore(reducers, state, applyMiddleware(thunk));
