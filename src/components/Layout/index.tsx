import { Outlet } from 'react-router-dom';
import { Box, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Header from './Header';
import MenuItem from './MenuItem';
import useLayoutStore from '../../stores/LayoutStore';

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
  const theme = useTheme();
  const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);

  const mainStyle = {
    padding: '1rem 2rem',
    marginLeft: isSidebarOpen ? '0px' : '-200px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: isSidebarOpen ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
    }),
  };
  return (
    <>
      <Header />
      <Box display="flex">
        <Slide direction="right" in={isSidebarOpen}>
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
        <main style={{ ...mainStyle }}>
          <Outlet />
        </main>
      </Box>

    </>

  );
}

// Default export
export default Layout;
