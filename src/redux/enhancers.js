/*
	ENHANCERS
	Functions that wrap the original store.dispatch function, providing extra
	functionality. By default, redux provides the 'applyMiddleware' enhancer.

	https://redux.js.org/advanced/middleware/#seven-examples
*/

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function describeObject(obj) {
  let description = obj;
  let typeOfObject = typeof obj;
  if (Array.isArray(obj) === true) {
    typeOfObject = 'array';
  }

  let ellipsis, value;
  switch (typeOfObject) {
    case 'string':
      ellipsis = obj.length > 35 ? `... (string: ${obj.length})` : '';
      value = obj.substring(0, 35 - ellipsis.length);

      description = `"${value}${ellipsis}"`;
      break;
    case 'object':
      description = `{ ${Object.keys(obj).join(', ')} }`;
      break;
    case 'array':
      description = `[ (array: ${obj.length}) ]`;
      break;
    case 'function':
      description = `(function: ${obj.name || '[anonymous]'})`;
      break;
    case 'number':
      description = `${obj}`;
      break;
    default:
      description = `${obj} (${typeOfObject})`;
      break;
  }

  return description;
}

// Dispatch logger
// Logs the actions dispatched, and the action parameters.
// Thunk actions will be logged with basic data about the functions.
function dispatchLogger(store) {
  // store: the redux store that the middleware was applied on

  return function (next) {
    // next: the original store.dispatch function
    return function (action) {
      // action: the redux action that was originally dispatched
      if (typeof action === 'function') {
        console.log(`[Redux::dispatch] (function) ${action.name || '[anonymous]'}`);
      } else {
        const name = action.type;
        const args = { ...action };
        // delete args.type;

        console.log(
          `[Redux::dispatch] ${name} { ${Object.keys(args)
            .map((arg) => {
              return `${arg}: ${describeObject(args[arg])}`;
            })
            .join(', ')} }`,
        );
      }

      return next(action);
    };
  };
}

export default applyMiddleware(dispatchLogger, thunk);
