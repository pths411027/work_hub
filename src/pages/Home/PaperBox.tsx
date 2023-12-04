/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, Typography, Avatar,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { MoreHoriz } from '@mui/icons-material';
import IOSSwitch from '../../tool/CustomerSwitch';
import { IData } from './index';

function PaperBox({
  id, name, type, status, date, owner, icon, ownerPic,
}:IData) {
  return (
    <Box
      sx={{
        height: '200px',
        width: '100%',
        borderRadius: '10px',

      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: grey[100],
          height: '100px',
          width: '100%',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          borderRadiusL: '10px',
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: '50px', height: '50px', bgcolor: 'white', padding: '5px', borderRadius: '10px',
          }}
          src={icon}
        />
      </Box>
      <Box display="flex" px={2} pt={1} gap={2} alignItems="center" sx={{ borderTop: '1px solid #E0E0E0' }}>
        <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bolder' }}>
          {name}
        </Typography>
        <IOSSwitch
          switchColor="#FDA93D"
          switchLength={40}
          switchHeight={20}
          sx={{ marginLeft: 'auto' }}
        />
      </Box>
      <Typography variant="h6" sx={{ fontSize: '14px', color: grey[500], pl: 2 }}>
        {date}
      </Typography>
      <Box display="flex" px={2} pt={1} gap={2} alignItems="center">
        <Avatar
          sx={{
            width: '20px', height: '20px', border: '1px solid #ccc',
          }}
          src={ownerPic}
        />
        <Typography variant="h6" sx={{ fontSize: '12px', color: grey[500], mr: -1 }}>
          by
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '12px' }}>
          {owner}
        </Typography>
        <MoreHoriz
          sx={{
            color: 'black',
            ml: 'auto',
            borderRadius: '50%',
            '&:hover': {
              bgcolor: grey[100],
            },
          }}
          onClick={() => console.log('click')}
        />
      </Box>
    </Box>
  );
}
export default PaperBox;
