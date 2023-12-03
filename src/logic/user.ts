/* eslint-disable import/prefer-default-export */
export const IsComplete = (type:string, value:string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (type === 'email') {
    return regex.test(value);
  }
  if (type === 'password') {
    return value.length > 6;
  }
  return false;
};
