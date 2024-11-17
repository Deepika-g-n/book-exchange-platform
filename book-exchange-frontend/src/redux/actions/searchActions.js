import axios from 'axios';

export const searchBooks = (query, filters, page) => async (dispatch) => {
  dispatch({ type: 'SEARCH_BOOKS_REQUEST' });
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/api/books/search', {
      headers: { 'x-auth-token': token },
      params: { query, ...filters, page },
    });
    dispatch({ type: 'SEARCH_BOOKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'SEARCH_BOOKS_FAIL', payload: error.response.data });
  }
};

export const loadMoreBooks = (query, filters, page) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/api/books/search', {
      headers: { 'x-auth-token': token },
      params: { query, ...filters, page },
    });
    dispatch({ type: 'LOAD_MORE_BOOKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOAD_MORE_BOOKS_FAIL', payload: error.response.data });
  }
};
