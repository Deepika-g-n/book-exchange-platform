const initialState = {
    books: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_BOOKS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'SEARCH_BOOKS_SUCCESS':
        return {
          ...state,
          books: action.payload.books,
          loading: false,
          page: action.payload.page,
          hasMore: action.payload.hasMore,
        };
      case 'SEARCH_BOOKS_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'LOAD_MORE_BOOKS_SUCCESS':
        return {
          ...state,
          books: [...state.books, ...action.payload.books],
          page: action.payload.page,
          hasMore: action.payload.hasMore,
        };
      case 'LOAD_MORE_BOOKS_FAIL':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  