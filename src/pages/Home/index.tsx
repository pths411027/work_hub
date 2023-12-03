import { Box, Button, Paper } from '@mui/material';
import { use } from 'i18next';
import { useEffect } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import useLayoutStore from '../../stores/LayoutStore';

function HomePage() {
  return (
    <Paper
      sx={{
        height: 810,
        width: '100%',
      }}
      elevation={5}
    >
      <Box>
        123
      </Box>
    </Paper>
  );
}

// Default export
export default HomePage;
