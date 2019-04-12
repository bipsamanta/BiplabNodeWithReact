import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
const PageButton = props => {
  const { color, disabled, variant, text, type } = props;
  return (
    <Button
      variant={variant}
      color={color} // primary,secondary
      disabled={disabled}
      type={type}
    >
      {text}
    </Button>
  );
};

PageButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

PageButton.defaultProps = {
  variant: 'outlined',
  text: 'continue',
  type: 'button',
  color: 'primary',
};
export default PageButton;
