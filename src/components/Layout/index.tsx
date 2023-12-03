import { Outlet } from 'react-router-dom';
import {
  Box, Slide, Divider, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import {
  HomeOutlined, DashboardOutlined,
} from '@mui/icons-material';
import { useState, ElementType, Fragment } from 'react';
import Header from './Header';
import MenuItem, { MenuItemProps, MenuItemSubProps } from './MenuItem';
import useLayoutStore from '../../stores/LayoutStore';
import { workManagementMenu, dataAnalysis } from '../../config/MenuConfig';

const WIDTH = 300;
// Component definition
function Layout() {
  const theme = useTheme();
  const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);

  const mainStyle = {
    flexGrow: 1,
    padding: '1rem 2rem',
    marginLeft: isSidebarOpen ? '0px' : `-${WIDTH}px`,
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
            // position: 'fixed',

            width: `${WIDTH}px`,
            height: '100vh',
            overflowY: 'auto',
            borderRight: '1px solid #ccc',
            padding: '1rem',
            color: grey[800],
            backgroundColor: grey[100],
          }}
          >
            {
              [workManagementMenu, dataAnalysis].map((item) => (
                <>
                  <Typography
                    key={item.nestHeader}
                    variant="h6"
                    sx={{
                      fontWeight: 'bold', fontSize: '14px', color: grey[600],
                    }}
                  >
                    {item.nestHeader}
                  </Typography>
                  {item.menu.map((menuItem) => (
                    <MenuItem
                      key={menuItem.title}
                      title={menuItem.title}
                      url={menuItem.url}
                      icon={menuItem.icon}
                      subtitle={menuItem.subtitle}
                    />
                  ))}
                </>
              ))
            }
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
