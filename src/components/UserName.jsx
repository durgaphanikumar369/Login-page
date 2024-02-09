import React from 'react';
import TextField from '@mui/material/TextField';

const UserName = ({ onChange }) => {
  return (
    <TextField
      fullWidth
      label="Username"
      variant="outlined"
      onChange={onChange}
    />
  );
};

export default UserName;

