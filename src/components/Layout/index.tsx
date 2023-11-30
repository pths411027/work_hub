import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Slide } from '@mui/material';
import Header from './Header';
import MenuItem from './MenuItem';

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
function Layout() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Header />
      <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
        <Box sx={{
          width: '200px',
          height: '100vh',
          overflowY: 'auto',
          borderRight: '1px solid #ccc',
        }}
        >
          {menu.map((item) => (
            <MenuItem key={item.title} title={item.title} />
          ))}
        </Box>
      </Slide>
      <main>
        <Outlet />
      </main>
    </>

  );
}

// Default export
export default Layout;
