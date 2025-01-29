import {jwtDecode} from 'jwt-decode';

export const extractPayload = (token: string) => {
  const decode = jwtDecode(token);
  return decode;
};
