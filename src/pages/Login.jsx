import React from 'react';
import Grid from '@mui/material/Grid';
import LoginButton from './LoginButton';
import Password from './Password';
import UserName from './UserName';

const Login = () => {
  const handleLogin = () => {
    // Your login logic here
    console.log('Login button clicked');
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div style={{ padding: '16px' }}>
          <h2>Login</h2>
          <UserName onChange={() => {}} />
          <Password onChange={() => {}} />
          <LoginButton onClick={handleLogin} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
