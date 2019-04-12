export const required = value => {
  let inputvalue = value;
  if (value && typeof value === 'string') {
    inputvalue = value.trim();
  }
  return inputvalue || inputvalue === 0 || inputvalue === false
    ? undefined
    : 'required!';
};

export const validateEmail = value => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value) ? undefined : 'Enter valid email address!';
};

export const validateReEnterPassword = (value, values) => {
  const password = values.get('password');
  if (value === password) return undefined;
  return 'password one and two must be same!';
};
