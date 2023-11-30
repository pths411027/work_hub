import {
  AppBar, Toolbar, IconButton, Typography, Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { yellow } from '@mui/material/colors';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';

function Header() {
  const [checked, setChecked] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: yellow[900],
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setChecked(!checked)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Demo
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <AccountCircle />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Marcus Tsai
          </Typography>
        </Box>
      </Toolbar>

    </AppBar>

  );
}

// Default export
export default Header;
