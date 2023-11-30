import {
  AppBar, Toolbar, IconButton, Typography, Box, Button, Icon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { yellow, orange } from '@mui/material/colors';
import { AccountCircle, Tune } from '@mui/icons-material';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import MenuItem from './menuItem';

const menu = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Contact',
    url: '/contact',
  },

];
// Component definition
function HomePage() {
  const [checked, setChecked] = useState(false);
  const navigiate = useNavigate();
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    navigiate('/login');
  };

  return (
    <Box sx={{ backgroundColor: yellow[100], height: '1000px', width: '100px' }}>
      123
    </Box>

  );
}

// Default export
export default HomePage;
