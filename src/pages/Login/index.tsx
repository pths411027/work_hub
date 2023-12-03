import { useState } from 'react';
import {
  Paper, Typography, FormControl, InputLabel, InputAdornment, Input, Box, IconButton,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  Email, Password, Visibility, VisibilityOff,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { orange } from '@mui/material/colors';
import { IsComplete } from '../../logic/user';

function LoginIn() {
  const [isEmailComplete, setIsEmailComplete] = useState(false);
  const [isPasswordComplete, setIsPasswordComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: orange[300],
    }}
    >
      <Paper sx={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        width: '300px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Typography variant="h5" sx={{ mb: '20px', fontWeight: 'bolder' }}>
          Login
        </Typography>
        <FormControl variant="standard" sx={{ mb: '20px', width: '100%' }}>
          <InputLabel>Username</InputLabel>
          <Input
            startAdornment={(
              <InputAdornment position="start">
                <Email sx={{
                  color: isEmailComplete ? 'green' : '',
                }}
                />
              </InputAdornment>
            )}
            onChange={(e) => setIsEmailComplete(IsComplete('email', e.target.value))}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ mb: '20px', width: '100%' }}>
          <InputLabel>Password</InputLabel>
          <Input
            type={showPassword ? 'text' : 'password'}
            startAdornment={(
              <InputAdornment position="start">
                <Password sx={{
                  color: isPasswordComplete ? 'green' : '',
                }}
                />
              </InputAdornment>
            )}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
            onChange={(e) => {
              setIsPasswordComplete(IsComplete('password', e.target.value));
            }}

          />
        </FormControl>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          sx={{ mb: '20px' }}
          fullWidth
          disabled={!isEmailComplete || !isPasswordComplete}
          onClick={() => {
            setIsLoading(true);
          }}
        >
          Login
        </LoadingButton>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1">
            Don&apos;t have an account?
            {' '}
            <Link to="/register" color="green">
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}

export default LoginIn;
