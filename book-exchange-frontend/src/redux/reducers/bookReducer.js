const initialState = {
    books: [],
    loading: false,
    error: null,
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BOOKS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_BOOKS_SUCCESS':
        return {
          ...state,
          books: action.payload,
          loading: false,
        };
      case 'FETCH_BOOKS_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case 'ADD_BOOK_SUCCESS':
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      case 'EDIT_BOOK_SUCCESS':
        return {
          ...state,
          books: state.books.map((book) =>
            book._id === action.payload._id ? action.payload : book
          ),
        };
      case 'DELETE_BOOK_SUCCESS':
        return {
          ...state,
          books: state.books.filter((book) => book._id !== action.payload),
        };
      case 'ADD_BOOK_FAIL':
      case 'EDIT_BOOK_FAIL':
      case 'DELETE_BOOK_FAIL':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  