import axios from 'axios';

// Login User
export const login = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    localStorage.setItem('token', response.data.token); // Save token to localStorage
    navigate('/books'); // Navigate to the BookList page
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};

// Register User
export const register = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    localStorage.setItem('token', response.data.token); // Save token to localStorage
    navigate('/books'); // Navigate to the BookList page
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
  }
};

// Logout User
export const logout = (navigate) => async (dispatch) => {
  localStorage.removeItem('token'); // Remove token from localStorage
  dispatch({ type: 'LOGOUT' });
  navigate('/login'); // Navigate to the login page
};

