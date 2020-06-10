import types from './types';
import initialState from './initialState';

function DateConfig(state = initialState, action) {
  if (action.type === types.GET_BOOKS) {
    return {
      list: action.list,
      loading: action.loading,
      error: state.error,
      mode: state.mode,
    };
  }
  if (action.type === types.LOAD) {
    return {
      list: state.list,
      loading: action.loading,
      error: state.error,
      mode: state.mode,
    };
  }
  if (action.type === types.ERORR) {
    return {
      list: state.list,
      loading: action.loading,
      error: action.error,
      mode: state.mode,
    };
  }
  if (action.type === types.MODE) {
    return {
      list: state.list,
      loading: state.loading,
      error: state.error,
      mode: action.mode,
    };
  }

  return state;
}

export default DateConfig;
