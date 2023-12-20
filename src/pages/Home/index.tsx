import {
  Box, Paper, Grid, useMediaQuery,
} from '@mui/material';

import PaperBox from './PaperBox';
import { paperData, IData } from '../../config/ReportData';

interface IWidth {
  xs: boolean,
  s: boolean,
  sm: boolean,
}
const getBoxWidth = ({
  xs, s, sm,
}: IWidth) => {
  if (sm) return '24%';
  if (s) return '32%';
  if (xs) return '49%';
  return '98%';
};
const getBoxGap = ({
  xs, s, sm,
}: IWidth) => {
  if (sm) return '1.333%';
  if (s) return '2%';
  if (xs) return '2%';
  return '2%';
};

function HomePage() {
  const menuWidth = 380;
  const xs = useMediaQuery(`(min-width:${500 + menuWidth}px)`);
  const s = useMediaQuery(`(min-width:${900 + menuWidth}px)`);
  const sm = useMediaQuery(`(min-width:${1100 + menuWidth}px)`);

  return (
    <Paper
      sx={{
        height: 810,
        width: '100%',
        padding: '1%',
        display: 'flex',
        justifyContent: '',
        overflowY: 'auto',
      }}
      elevation={0}
    >

      <Grid
        alignContent={{ xs: 'center', sm: 'flex-start' }}
        container
        gap={getBoxGap({ xs, s, sm })}
      >
        {paperData.map((item) => (
          <Box
            key={item.id}
            sx={{
              height: '200px',
              width: getBoxWidth({
                xs, s, sm,
              }),
              borderRadius: '10px',
              border: '1px solid #E0E0E0',
              '&:hover': {
                cursor: 'pointer',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
              },
            }}
          >
            <PaperBox
              id={item.id}
              name={item.name}
              type={item.type}
              status={item.status}
              date={item.date}
              owner={item.owner}
              icon={item.icon}
              ownerPic={item.ownerPic}
            />
          </Box>
        ))}
      </Grid>
    </Paper>
  );
}

export default HomePage;
