/* eslint-disable import/prefer-default-export */
import { useNavigate, NavigateFunction } from 'react-router-dom';
import useAuthority from '../stores/Authority';

const { getState, setState } = useAuthority;
export const IsComplete = (type:string, value:string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/;
  if (type === 'email') {
    return regex.test(value);
  }
  if (type === 'password') {
    return value.length > 6;
  }
  return false;
};

export const handleLogin = async (
  email:string,
  password:string,
  setIsLoading:(value: boolean) => void,
  navigate: NavigateFunction,
) => {
  setTimeout(() => {
    useAuthority.getState().setAccessToken('123');
    setIsLoading(false);
    console.log('完成_1');
    navigate('/home');
  }, 3000);
  console.log('完成_2');
};
