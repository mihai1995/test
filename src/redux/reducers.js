import { combineReducers } from 'redux';

import books from './BOOKS';

export default combineReducers({
  books: books.reducers,
});
