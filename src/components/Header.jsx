import React from 'react';
import { FaSearch, FaBell, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { IconButton, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../ToggleColorMode';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <AppBar position="static" color="default" sx={{ mb: 4 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <FaCalendarAlt />
          <Typography variant="h6" component="div">
            EventPlanner+
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <FaSearch />
          <FaBell />
          <Link to="/login">
            <IconButton color="inherit">
              <FaUser />
            </IconButton>
          </Link>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
