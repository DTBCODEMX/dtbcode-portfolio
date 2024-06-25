import React from 'react';
import { useTheme } from '@mui/material/styles';  // Asegúrate de importar useTheme
import { useColorMode } from '../../theme/ToggleColorMode';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          EventPlanner+
        </Typography>
        <IconButton color="inherit" onClick={toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/login">
          <AccountCircleIcon />
        </IconButton>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
