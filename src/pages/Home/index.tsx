import {
  Box, Paper, Grid, useMediaQuery,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import googleDrive from '../../pictures/google-drive.png';
import man from '../../pictures/man.png';
import manHat from '../../pictures/manhat.png';
import illustrator from '../../pictures/illustrator-draw.png';
import chatgpt from '../../pictures/chatgpt.png';
import linux from '../../pictures/linux.png';
import microsoft from '../../pictures/microsoft.png';
import typescript from '../../pictures/typescript.png';
import mailChimp from '../../pictures/mailchimp.png';
import PaperBox from './PaperBox';

export interface IData {
  id: string,
  name: string,
  type: string,
  status: string,
  date: string,
  owner: string,
  icon: string,
  ownerPic: string,
}

const fakeData: IData[] = [
  {
    id: '1',
    name: 'Google Drive API',
    type: 'API',
    status: 'In Progress',
    date: 'May 22, 2022',
    owner: 'Will Tong',
    icon: googleDrive,
    ownerPic: man,
  },
  {
    id: '2',
    name: 'Illustrator Draw API',
    type: 'API',
    status: 'In Progress',
    date: 'May 22, 2022',
    owner: 'Marcus Tsai',
    icon: illustrator,
    ownerPic: man,
  },
  {
    id: '3',
    name: 'Atom',
    type: 'Software',
    status: 'In Progress',
    date: 'May 22, 2023',
    owner: 'Aaron Lin',
    icon: mailChimp,
    ownerPic: manHat,
  },
  {
    id: '4',
    name: 'Google Drive API',
    type: 'API',
    status: 'Upcoming',
    date: 'Agu 22, 2022',
    owner: 'Tim Ho',
    icon: googleDrive,
    ownerPic: manHat,
  },
  {
    id: '5',
    name: 'Illustrator Draw API',
    type: 'API',
    status: 'In Progress',
    date: 'May 19, 2022',
    owner: 'Shelly Chen',
    icon: linux,
    ownerPic: man,
  },
  {
    id: '6',
    name: 'Atom',
    type: 'Software',
    status: 'Upcoming',
    date: 'May 22, 2022',
    owner: 'Owen Chung',
    icon: microsoft,
    ownerPic: manHat,
  },
];

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
        justifyContent: 'center',
        overflowY: 'auto',
      }}
      elevation={0}
    >

      <Grid
        alignContent={{ xs: 'center', sm: 'flex-start' }}
        container
        gap={getBoxGap({ xs, s, sm })}
      >
        {fakeData.map((item) => (
          <Box
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
