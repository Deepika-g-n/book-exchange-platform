import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationBar from './components/NavBar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BookList from './components/Books/BookList';
import AddBook from './components/Books/AddBook'; 
import EditBook from './components/Books/EditBook';
import UserProfile from './components/Profile/UserProfile';
import LandingPage from './components/LandingPage';
import BookSearch from './components/Books/BookSearch';
import {jwtDecode} from 'jwt-decode';



const getCurrentUserId = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.user.id; 
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};


const App = () => {
  const currentUserId = getCurrentUserId();
  
  return (
    <Provider store={store}>
      <Router>
      <NavigationBar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} /> 
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/search" element={<BookSearch />} />       
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
