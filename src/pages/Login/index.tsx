/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import {
  Paper, Typography, FormControl, InputLabel, InputAdornment, Input, Box, IconButton,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  Email, Password, Visibility, VisibilityOff,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { orange } from '@mui/material/colors';
import './login.css';
import { IsComplete, handleLogin } from '../../logic/login';
import useAuthority from '../../stores/Authority';

function LoginIn() {
  const navigate = useNavigate();
  const { accessToken } = useAuthority((state) => state);
  const { setAccessToken } = useAuthority((state) => state);
  const { resetAccessToken } = useAuthority((state) => state);

  const [isEmailComplete, setIsEmailComplete] = useState(false);
  const [isPasswordComplete, setIsPasswordComplete] = useState(false);

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    resetAccessToken();
  }, []);
  console.log(accessToken);
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
            value={email}
            startAdornment={(
              <InputAdornment position="start">
                <Email
                  className={isEmailComplete ? 'shake-y' : isEmailError ? 'shake-x' : ''}
                  sx={{
                    color: isEmailComplete ? 'green' : '',
                  }}
                />

              </InputAdornment>
            )}
            onChange={(e) => {
              setIsEmailError(false);
              setEmail(e.target.value);
              setIsEmailComplete(IsComplete('email', e.target.value));
            }}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ mb: '20px', width: '100%' }}>
          <InputLabel>Password</InputLabel>
          <Input
            value={password}
            type={showPassword ? 'text' : 'password'}
            startAdornment={(
              <InputAdornment position="start">
                <Password
                  className={isPasswordComplete ? 'shake-y' : isPasswordError ? 'shake-x' : ''}
                  sx={{
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
                  { password === '' ? null : (
                    showPassword ? <VisibilityOff /> : <Visibility />)}
                </IconButton>
              </InputAdornment>
            )}
            onChange={(e) => {
              if (e.target.value === '')setShowPassword(false);
              setIsPasswordError(false);
              setPassword(e.target.value);
              setIsPasswordComplete(IsComplete('password', e.target.value));
            }}

          />
        </FormControl>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          sx={{ mb: '20px' }}
          fullWidth
          onClick={() => {
            setIsLoading(true);
            if (!isEmailComplete || !isPasswordComplete) {
              setIsLoading(false);
              setIsEmailError(!isEmailComplete);
              setIsPasswordError(!isPasswordComplete);
              return;
            }
            handleLogin(email, password, setIsLoading, navigate);
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
