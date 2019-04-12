import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
const TextInput = props => {
  const {
    input,
    label,
    placeholder,
    type,
    meta,
    width,
    className,
    disabled,
    maxLength,
    required,
    multiline,
    rowsMax,
    helperText,
    fullWidth,
  } = props;
  const { touched, error, warning } = meta;
  return (
    <TextField
      required={required}
      error={touched && error}
      disabled={disabled}
      className={className}
      label={label}
      type={type} // text,number
      width={width}
      multiline={multiline}
      rowsMax={rowsMax}
      placeholder={placeholder}
      helperText={touched && error}
      fullWidth={fullWidth}
      inputProps={{ maxLength: { maxLength } }}
      {...input}
    />
  );
};

TextInput.propTypes = {
  ariaLabel: PropTypes.string,
  ariaRequired: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  field: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  icon: PropTypes.object,
  prefix: PropTypes.object,
  postfix: PropTypes.object,
  onKeyPress: PropTypes.func,
  width: PropTypes.string,
  size: PropTypes.string,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  errorLabel: PropTypes.string,
  disabled: PropTypes.bool,
  hideError: PropTypes.bool,
  maxLength: PropTypes.string,
  id: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
};
export default TextInput;
