import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './assign.css';
import TemporaryDrawer from './Drawer';

const MyAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={toggleDrawer} style={{ marginRight: '16px' }}>
          <TemporaryDrawer open={isDrawerOpen} onClose={toggleDrawer} />1
        </Button>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          STOCKK
        </Typography>
        <Button color="inherit" component={Link} to="/home" sx={{ marginRight: 1 }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about" sx={{ marginRight: 1 }}>
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/contact" sx={{ marginRight: 1 }}>
          Contact Us
        </Button>
        <Button color="inherit" component={Link} to="/">
          Logout
        </Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
