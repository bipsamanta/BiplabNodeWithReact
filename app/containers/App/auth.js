import Cookies from 'universal-cookie';

const cookies = new Cookies();
// const token = cookies.get('token');

const cookieName = 'BIPLAB_AUTH';

export const isAuthenticated = () => {
  if (getCookie()) {
    return true;
  }
  return false;
};

export const createCookie = value => {
  const now = new Date();
  const expireTime = now.getTime() + 1000 * 36000;
  now.setTime(expireTime);
  cookies.set(cookieName, value, {
    path: '/',
    expires: now,
  });
};

export const getCookie = () => {
  const result = cookies.get(cookieName);
  return result === null ? null : result;
};

export const deleteCookie = () => {
  // If the cookie exists
  if (getCookie()) cookies.remove(cookieName);
};
