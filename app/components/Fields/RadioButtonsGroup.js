import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'inline',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    display: 'inline',
  },
});

const RadioButtonsGroup = props => {
  const { classes, options, input } = props;
  return (
    <div className={classes.root}>
      <RadioGroup aria-label="Gender" className={classes.group} {...input}>
        {options.map((o, i) => (
          <FormControlLabel
            key={`options ${i}`}
            value={o.value}
            control={<Radio color="primary" />}
            label={o.value}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

RadioButtonsGroup.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.object,
};

export default withStyles(styles)(RadioButtonsGroup);
