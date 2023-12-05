/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, Typography, Avatar, Menu, MenuItem, IconButton, Popover, Grid, Chip,
} from '@mui/material';
import {
  grey, orange, green, blue,
} from '@mui/material/colors';
import { MoreHoriz } from '@mui/icons-material';
import {
  useState, MouseEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';
import IOSSwitch from '../../tool/CustomerSwitch';
import { IData } from './index';

const fakeJob = [
  {
    id: '1',
    name: 'UX Designer',
    color: orange[200],
  },
  {
    id: '2',
    name: 'Frontend Developer',
    color: green[200],
  },
  {
    id: '3',
    name: 'Backend Developer',
    color: blue[200],
  },
];
function PaperBox({
  id, name, type, status, date, owner, icon, ownerPic,
}:IData) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDetail, setIsDetail] = useState(false);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsDetail(!isDetail);
    setAnchorEl(event.currentTarget);
  };
  const [manAnchorEL, setManAnchorEl] = useState<null | HTMLElement>(null);
  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setManAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setManAnchorEl(null);
  };
  const open = Boolean(manAnchorEL);
  return (
    <Box
      sx={{
        height: '240px',
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
          ria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          sx={{
            width: '20px', height: '20px', border: '1px solid #ccc',
          }}
          src={ownerPic}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          elevation={0}
          open={open}
          anchorEl={manAnchorEL}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Box sx={{
            height: '200px', width: '300px', border: '1px solid #ccc', borderRadius: '5px',
          }}
          >
            <Box sx={{
              height: '70px', width: '298px', bgcolor: '#ccc', borderTop: '5px',
            }}
            />
            <Box display="flex">

              <Avatar
                sx={{
                  width: '100px', height: '100px', border: '2px solid white', mt: '-50px', ml: '10px', bgcolor: orange[200],
                }}
                src={ownerPic}
              />
              <Typography variant="h5" sx={{ ml: '12px', fontWeight: 'bolder' }}>
                {owner}
              </Typography>
            </Box>
            <Grid alignContent={{ xs: 'center', sm: 'flex-start' }} container gap={1} sx={{ ml: '12px', py: 2 }}>
              {fakeJob.map((item) => (
                <Grid
                  sx={{
                    height: '20px',
                    borderRadius: '5px',
                    px: '5px',
                    py: '3px',
                    fontSize: '12px',
                    fontWeight: 'bolder',
                    bgcolor: item.color,
                  }}
                >
                  {item.name}
                </Grid>
              ))}

            </Grid>
            <Box />
          </Box>
        </Popover>
        <Typography variant="h6" sx={{ fontSize: '12px', color: grey[500], mr: -1 }}>
          by
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '12px' }}>
          {owner}
        </Typography>
        <IconButton
          onClick={handleClick}
          sx={{
            mt: -1,
            height: '30px',
            width: '30px',
            color: 'black',
            ml: 'auto',
            borderRadius: '50%',
            '&:hover': {
              bgcolor: grey[100],
            },
          }}
        >
          <MoreHoriz
            id="paper-menu"
          />
        </IconButton>
        <Menu
          id="paper-menu"
          anchorEl={anchorEl}
          open={isDetail}
          onClose={() => setIsDetail(false)}
          MenuListProps={{
            'aria-labelledby': 'paper-menu',
          }}
        >
          <MenuItem onClick={() => { navigate('/paper'); }}>view content</MenuItem>
          <MenuItem>edit content</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
export default PaperBox;
