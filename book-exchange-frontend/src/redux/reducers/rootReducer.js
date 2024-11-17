import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducer';
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  search:searchReducer
});

export default rootReducer;
