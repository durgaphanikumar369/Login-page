import React from 'react';
import TextField from '@mui/material/TextField';

const Password = ({ onChange }) => {
  return (
    <TextField
      fullWidth
      label="Password"
      variant="outlined"
      type="password"
      onChange={onChange}
    />
  );
};

export default Password;
