/*	EXAMPLE: MICRO MODULE

	A micro module is a type of module that separates all of the module
	interface definitions (initialState, actions, reducers), in separate
	files, then imports and re-exports default them through the standard index.js
	file used by JS modules.

	The module interfaces are self-contained in the same file defining them,
	without externalizing any interface definitions in other files.
*/

import initialState from './initialState';
import actions from './actions';
import reducers from './reducers';

export default {
  initialState,
  actions,
  reducers,
};
