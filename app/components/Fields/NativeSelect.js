import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const NativeSelect = props => {
  const { classes, options, input } = props;

  return (
    <div className={classes.root}>
      <InputLabel htmlFor="age-native-simple">Designation</InputLabel>
      <Select
        native
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
        {...input}
      >
        <option value="" />
        {options.map((o, i) => (
          <option key={`opt${i}`} value={o.value}>
            {o.value}
          </option>
        ))}
      </Select>
    </div>
  );
};

NativeSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelect);
