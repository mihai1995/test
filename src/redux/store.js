/*
	STORE
	The store that redux will use.
	Enhancers and middleware can be applied. (Middleware is also an enhancer)

	https://redux.js.org/api/createstore
*/

import { createStore } from 'redux';
import enhancers from './enhancers';
import rootReducer from './reducers';
import initialState from './initialState';

export default createStore(rootReducer, initialState, enhancers);
