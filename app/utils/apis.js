import request from 'utils/request';
import Cookies from 'universal-cookie';

import { selectPath } from 'utils/PathLocator';

// const urlBase = 'http://localhost:3001'; // Can configure with global
const urlBase = selectPath({ pathFor: 'backend' });
const cookies = new Cookies();
const token = cookies.get('token');
export const getNames = () =>
  request(`${urlBase}/names`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authentication: `token ${token}`,
    },
  });
export const employeeLogin = payload =>
  request(`${urlBase}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authentication: `token ${token}`,
    },
    body: JSON.stringify(payload),
  });
export const login = payload =>
  request(`${urlBase}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

export const register = payload =>
  request(`${urlBase}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });
