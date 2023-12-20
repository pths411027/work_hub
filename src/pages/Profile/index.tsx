/* eslint-disable no-nested-ternary */
import React, { useState, useRef } from 'react';
import {
  Typography, Box, Avatar, Divider, Button, TextField,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import man from '../../pictures/man.png';

function PersonalInfo() {
  const [fileStatus, setFileStatus] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileSizeInBytes = file.size;
      // console.log(`File size: ${fileSizeInBytes} bytes`);
      if (fileSizeInBytes > 200000) {
        setFileStatus(1);
      } else {
        setFileStatus(2);
      }
    }
  };
  return (
    <Box sx={{ mx: '5%' }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bolder', mt: 2 }}
      >
        Public avatar
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: '16px', mt: 1, color: grey[700],
        }}
      >
        You can change your avatar here or remove the current avatar.
      </Typography>
      <Box display="flex" sx={{ mt: 2 }}>
        <Avatar
          alt="Marcus Tsai"
          src={man}
          sx={{
            width: '100px',
            height: '100px',
            mt: 1,
            ml: '50px',
            padding: '1px',
            bgcolor: 'white',
            mr: 1,
            border: '1px solid black',
          }}
        />
        <Box>
          <Typography
            sx={{ fontWeight: 'bolder', mt: 1, ml: 2 }}
          >
            Upload new avatar
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
            <input
              type="file"
              ref={inputRef}
              accept=".png"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <Button
              variant="outlined"
              sx={{
                fontSize: '12px',
                color: grey[700],
                ml: 2,
                border: '0.5px solid',
                borderColor: grey[700],
              }}
              onClick={handleClick}
            >
              Choose file...
            </Button>
            <Typography
              sx={{ fontSize: '12px', ml: 2 }}
            >
              {fileStatus === 2 ? 'File size is valid'
                : fileStatus === 1 ? 'File size is too large' : 'No file chosen.'}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontSize: '16px', mt: 1, ml: 2, color: grey[700],
            }}
          >
            The maximum file size allowed is 200KB.
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bolder', mt: 2 }}
      >
        Main Setting
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: '16px', mt: 1, color: grey[700],
        }}
      >
        This information will appear on your profile.
      </Typography>
      <Typography
        sx={{ fontWeight: 'bolder', mt: 1 }}
      >
        Full name
      </Typography>
      <TextField size="small" sx={{ width: '500px', mt: 1 }} />
      <Typography
        variant="h5"
        sx={{
          fontSize: '14px', mt: 0.5, color: grey[700],
        }}
      >
        This information will appear on your profile.
      </Typography>
      <Typography
        sx={{ fontWeight: 'bolder', mt: 1 }}
      >
        Email
      </Typography>
      <TextField size="small" sx={{ width: '500px', mt: 1 }} />
      <Typography
        variant="h5"
        sx={{
          fontSize: '14px', mt: 0.5, color: grey[700],
        }}
      >
        We also use email for avatar detection if no avatar is uploaded.
      </Typography>
      <Typography
        sx={{ fontWeight: 'bolder', mt: 1 }}
      >
        Job Title
      </Typography>
      <TextField size="small" sx={{ width: '500px', mt: 1 }} />

      <Divider sx={{ mt: 2, mx: 2 }} />
    </Box>
  );
}

export default PersonalInfo;
