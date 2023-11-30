import {
  Typography, Box,
} from '@mui/material';

import { orange } from '@mui/material/colors';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';

interface MenuItemProps {
  title: string;
}
// Component definition
function MenuItem(item: MenuItemProps) {
  const [hover, setHover] = useState(false);
  const { title } = item;

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        width: '200px',
        padding: '0.5rem 2rem 0.5rem 2rem',
        '&:hover': { backgroundColor: orange[100], cursor: 'pointer' },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}

    >
      <AccountCircle
        sx={{
          display: hover ? 'block' : 'none',
          position: 'absolute',
          left: 10,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          ml: '1rem',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default MenuItem;
