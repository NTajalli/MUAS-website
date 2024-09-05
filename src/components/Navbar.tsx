import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'red' }}>
          Maryland Unmanned Aerial Systems
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/competition">
            Competition
          </Button>
          <Button color="inherit" component={Link} to="/apply">
            Apply
          </Button>
          <Button color="inherit" component={Link} to="/progress">
            Progress
          </Button>
          <Button color="inherit" component={Link} to="/resources">
            Resources
          </Button>
          <Button color="inherit" component={Link} to="/sponsors">
            Sponsors
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
