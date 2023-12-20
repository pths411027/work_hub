import { Box, Typography, Grid } from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot,
} from '@mui/lab';
import {
  grey, orange, green, blue,
} from '@mui/material/colors';

const fakeJob = [
  {
    id: '1',
    name: 'Work',
    color: orange[200],
  },
  {
    id: '2',
    name: 'Finance',
    color: green[200],
  },
  {
    id: '3',
    name: 'CoWork',
    color: blue[200],
  },
];

function TaskCard() {
  return (

    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        borderRadius: '5px',
        borderLeft: '10px solid',
        borderLeftColor: '#44C8BD',
        bgcolor: 'white',
        height: '100px',
        width: '300px',
        gap: '5px',
        p: '10px',
      }}
    >
      <Typography sx={{ fontSize: '18px', fontWeight: 'bolder' }}>
        Partner meeting
      </Typography>
      <Typography sx={{ fontSize: '14px', color: grey[500] }}>
        Today, 9:00 AM
      </Typography>
      <Grid alignContent={{ xs: 'center', sm: 'flex-start' }} container gap={1}>
        {
          fakeJob.map((item) => (
            <Box
              key={item.id}
              sx={{
                maxHeight: '20px',
                px: '15px',
                py: '1px',
                height: '20px',
                borderRadius: '5px',

                fontWeight: 'bolder',
                bgcolor: '#E8F7F5',

              }}
            >
              <Typography
                sx={{ fontSize: '12px', fontWeight: 'bolder', color: '#44C8BD' }}
              >
                #
                {item.name}
              </Typography>

            </Box>

          ))
        }
      </Grid>
    </Box>
  );
}

export default TaskCard;
