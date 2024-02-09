import React from 'react';
import Button from '@mui/material/Button';

// Define a dummy function using requirePropFactory
const requirePropFactory = () => {};

const LoginButton = ({ onClick }) => {
  // Use requirePropFactory somewhere in your component
  requirePropFactory();

  return (
    <Button variant="contained" color="primary" fullWidth onClick={onClick}>
      Login
    </Button>
  );
};

export default LoginButton;
