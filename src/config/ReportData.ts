import {
  Box, Paper, Grid, useMediaQuery,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import googleDrive from '../pictures/google-drive.png';
import man from '../pictures/man.png';
import manHat from '../pictures/manhat.png';
import illustrator from '../pictures/illustrator-draw.png';
import linux from '../pictures/linux.png';
import microsoft from '../pictures/microsoft.png';
import mailChimp from '../pictures/mailchimp.png';

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

export const paperData: IData[] = [
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
