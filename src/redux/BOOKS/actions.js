import types from './types';
// import data from '../../data.json'; // used when exceed limit of request per day
export const getBooksGoogle = (title) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.LOAD, loading: true });
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyArfgE88vs0Gt0SClzu7k3ukU5A1Ci1a3A`,
    );

    const books = await data.json();
    // const books = data; // used when exceed limit of request per day
    if (data?.status !== 200) {
      return dispatch({ type: types.ERORR, loading: false, error: 'something is wrong in request' });
    }
    return dispatch({ type: types.GET_BOOKS, list: books.items || [], loading: false });
  } catch (error) {
    return dispatch({ type: types.ERORR, loading: false, error: error.message });
  }
};

export const mode = (mode) => {
  localStorage.setItem('mode', JSON.stringify({ mode }));
  return { type: types.MODE, mode };
};
export const currentMode = () => {
  let theme = localStorage.getItem('mode');
  return { type: types.MODE, mode: JSON.parse(theme).mode };
};
export default {
  getBooksGoogle,
  mode,
};
