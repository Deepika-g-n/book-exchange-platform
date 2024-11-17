import axios from 'axios';

export const fetchBooks = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/api/books/', {
      headers: { 'x-auth-token': token },
    });
    dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_BOOKS_FAIL', payload: error.response.data });
  }
};

export const addBook = (bookData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:5000/api/books', bookData, {
      headers: { 'x-auth-token': token },
    });
    dispatch({ type: 'ADD_BOOK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_BOOK_FAIL', payload: error.response.data });
  }
};

export const editBook = (id, bookData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`http://localhost:5000/api/books/${id}`, bookData, {
      headers: { 'x-auth-token': token },
    });
    dispatch({ type: 'EDIT_BOOK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'EDIT_BOOK_FAIL', payload: error.response.data });
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/api/books/${id}`, {
      headers: { 'x-auth-token': token },
    });
    dispatch({ type: 'DELETE_BOOK_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_BOOK_FAIL', payload: error.response.data });
  }
};
