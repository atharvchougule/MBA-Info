//import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Menubar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#142d4c' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href="tel:+1234567890" style={{ textDecoration: 'none', color: 'inherit' }}>
          <PhoneIcon sx={{ marginRight: 1 }}/> +1234567890
          </a>
          </Typography>
          <Typography>
          <a href="mailto:abc@xyz.com" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MailOutlineIcon sx={{ marginRight: 1 }} /> abc@xyz.com
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Menubar;
