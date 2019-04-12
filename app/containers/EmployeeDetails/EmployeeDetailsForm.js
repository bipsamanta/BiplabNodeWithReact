import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LockOutlinedIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from '@material-ui/core/Link';

import {
  TextInput,
  RadioButtonsGroup,
  DatePickers,
  NativeSelect,
} from 'components/Fields';
// import RadioButtonsGroup from 'components/Fields/RadioButtonsGroup';
import * as rules from 'utils/validationRules';
const FORM_NAME = 'EmployeeDetailsForm';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

export const SexOptions = [
  { value: 'female', label: 'female' },
  { value: 'male', label: 'male' },
];

export const Designations = [
  { value: 'PA', label: 'PA' },
  { value: 'A', label: 'A' },
  { value: 'SA', label: 'SA' },
  { value: 'M', label: 'M' },
];
class EmployeeDetailsForm extends React.PureComponent {
  render() {
    const { classes, isFormValid } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth>
              <Field
                id="name"
                name="name"
                component={TextInput}
                validate={[rules.required]}
                label="Employee Name"
                autoFocus
                required
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <Field
                id="email"
                name="email"
                component={TextInput}
                validate={[rules.required]}
                label="Email Address"
                required
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <FormLabel component="legend">Gender*</FormLabel>
              <Field
                id="gender"
                name="gender"
                component={RadioButtonsGroup}
                validate={[rules.required]}
                label="Gender"
                options={SexOptions}
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <Field
                id="designation"
                name="designation"
                component={NativeSelect}
                label="Gender"
                options={Designations}
                validate={[rules.required]}
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <Field
                id="dob"
                name="dob"
                component={DatePickers}
                label="Date of birth"
                validate={[rules.required]}
              />
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!isFormValid}
              onClick={this.props.handleSubmit}
            >
              Add New Employee
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
EmployeeDetailsForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isFormValid: PropTypes.bool,

  handleSubmit: PropTypes.func,
};
export default withStyles(styles)(
  reduxForm({ form: FORM_NAME })(EmployeeDetailsForm),
);
