import {
  AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { orange } from '@mui/material/colors';
import { AccountCircle } from '@mui/icons-material';
import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useLayoutStore from '../../stores/LayoutStore';

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenu, setIsMenu] = useState(false);
  const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsMenu(!isMenu);
    setAnchorEl(event.currentTarget);
  };
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: orange[300],
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: isSidebarOpen ? theme.transitions.duration.enteringScreen
            : theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: 'black' }}
          onClick={() => toggleSidebar()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 'bold' }} color="black">
          Demo
        </Typography>
        <Button id="basic-button" onClick={handleClick} sx={{ color: 'black' }}>
          <AccountCircle sx={{ color: 'black', mr: 2 }} />
          <Typography sx={{ fontSize: '16px' }}>
            Marcus Tsai
          </Typography>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isMenu}
          onClose={() => setIsMenu(false)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem onClick={() => navigate('/login')}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
