// Button.jsx
import React from 'react';
import styles from './Button.module.css';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children }) => {
  return (
    <MuiButton
      className={styles.button}
      disableRipple
      disableElevation
    >
      {children}
    </MuiButton>
  );
};

export default Button;