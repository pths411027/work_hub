import { Box, Typography, Grid } from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot,
} from '@mui/lab';
import {
  grey, orange, green, blue,
} from '@mui/material/colors';
import { useState, useEffect } from 'react';
import TaskCard from './TaskCard';

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

const fakeType = [
  {
    id: '1',
    name: 'To-Do',
  },
  {
    id: '2',
    name: 'In Progress',
  },
  {
    id: '3',
    name: 'Done',
  },
  {
    id: '4',
    name: 'Pending',
  },
  {
    id: '5',
    name: 'Cancel',
  },
];

function TaskTimeLine() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Box
      sx={{
        px: '15px',
        maxWidth: `${viewportWidth - 300}px`,
        overflowX: 'auto',
        bgcolor: grey[100],
      }}
    >
      <Box
        display="flex"
        justifyContent="space-evenly"
        sx={{
          my: '50px', gap: '20px', width: `${330 * 5}px`,
        }}
      >
        {fakeType.map((item) => (
          <Box
            key={item.id}
            sx={{
              bgcolor: grey[200],
              borderRadius: '5px',
            }}
          >
            <Typography sx={{
              fontSize: '24px', fontWeight: 'bolder', width: '330px', ml: '10px',
            }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}

      </Box>
      <Box
        display="flex"
        sx={{
          gap: '20px',
        }}
      >

        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: '330px',
            px: '10px',
            py: '10px',
            gap: '10px',
            bgcolor: grey[100],
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bolder' }}>
            To-Do
          </Typography>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: '330px',
            px: '10px',
            py: '10px',
            gap: '10px',
            bgcolor: grey[100],
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bolder' }}>
            To-Do
          </Typography>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: '330px',
            px: '10px',
            py: '10px',
            gap: '10px',
            bgcolor: grey[100],
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bolder' }}>
            To-Do
          </Typography>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: '330px',
            px: '10px',
            py: '10px',
            gap: '10px',
            bgcolor: grey[100],
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bolder' }}>
            To-Do
          </Typography>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: '330px',
            px: '10px',
            py: '10px',
            gap: '10px',
            bgcolor: grey[100],
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 'bolder' }}>
            To-Do
          </Typography>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Box>
      </Box>
    </Box>
  );
}

export default TaskTimeLine;
