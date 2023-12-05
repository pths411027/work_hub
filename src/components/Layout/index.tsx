import { Outlet, useNavigate } from 'react-router-dom';
import {
  Box, Slide, Divider, Typography, Button, Menu, MenuItem, IconButton, Avatar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import {
  AccountCircle, KeyboardDoubleArrowLeftOutlined,
} from '@mui/icons-material';
import {
  useState, MouseEvent,
} from 'react';
import Header from './Header';
import MenuItems from './MenuItem';
import useLayoutStore from '../../stores/LayoutStore';
import { workManagementMenu, dataAnalysis } from '../../config/MenuConfig';
import man from '../../pictures/man.png';

const WIDTH = 300;
function Layout() {
  const navigate = useNavigate();
  const theme = useTheme();
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenu, setIsMenu] = useState(false);
  const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsMenu(!isMenu);
    setAnchorEl(event.currentTarget);
  };

  const mainStyle = {
    flexGrow: 1,
    padding: '1rem 2rem',
    marginLeft: isSidebarOpen ? `${WIDTH}px` : '0px',
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
            position: 'fixed',
            top: 0,
            width: `${WIDTH}px`,
            height: '100vh',
            overflowY: 'auto',
            borderRight: '1px solid #ccc',
            bgcolor: grey[100],
          }}
          >
            <Box
              display="flex"
              alignItems="center"
              sx={{ height: '60px', pl: 2 }}
            >
              <Button id="person-button" onClick={handleClick} sx={{ color: 'black' }}>
                <Avatar
                  alt="Marcus Tsai"
                  src={man}
                  sx={{
                    width: '30px',
                    height: '30px',
                    padding: '1px',
                    bgcolor: 'white',
                    mr: 1,
                    border: '1px solid #ccc',
                  }}
                />
                <Typography sx={{ fontSize: '16px' }}>
                  Marcus Tsai
                </Typography>
              </Button>
              <Menu
                id="person-menu"
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
              <IconButton
                size="large"
                sx={{
                  color: 'black',
                  display: {
                    sm: isSidebarOpen ? 'block' : 'none',
                    marginLeft: 'auto',
                  },
                }}
                onClick={() => toggleSidebar()}
              >
                <KeyboardDoubleArrowLeftOutlined />
              </IconButton>
            </Box>
            <Divider />
            <Box sx={{
              width: `${WIDTH}px`,
              overflowY: 'auto',
              borderRight: '1px solid #ccc',
              padding: '1rem',
              color: grey[800],
              bgcolor: grey[100],
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
                    <MenuItems
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
          </Box>
        </Slide>
        <main style={{ ...mainStyle }}>
          <Outlet />
        </main>
      </Box>
    </>
  );
}

export default Layout;
