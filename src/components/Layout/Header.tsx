import {
  AppBar, Toolbar, IconButton, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useLayoutStore from '../../stores/LayoutStore';

function Header() {
  const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        justifyContent: 'center',
        height: '50px',
        borderBottom: 'none',
        marginLeft: isSidebarOpen ? '300px' : '0px',
        width: isSidebarOpen ? 'calc(100% - 300px)' : '100%',
        bgcolor: 'white',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: isSidebarOpen ? theme.transitions.duration.enteringScreen
            : theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar sx={{ border: 'none' }}>
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            color: 'black',
            display: { sm: isSidebarOpen ? 'none' : 'block' },
          }}
          onClick={() => toggleSidebar()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold' }} color="black">
          Demo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
