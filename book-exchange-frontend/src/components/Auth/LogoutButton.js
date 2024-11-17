import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    
    window.location.href = '/login';
  };

  return (
    <Button variant="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
