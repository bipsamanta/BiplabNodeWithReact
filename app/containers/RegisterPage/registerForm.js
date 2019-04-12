import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from '@material-ui/core/Link';

import TextInput from 'components/Fields/TextInput';
import * as rules from 'utils/validationRules';

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
const FORM_NAME = 'registerForm';

class RegisterForm extends React.PureComponent {
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
            Register
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth>
              <Field
                id="email"
                name="email"
                component={TextInput}
                validate={[rules.required, rules.validateEmail]}
                label="Email Address"
                autoFocus
                required
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <Field
                id="password"
                name="password"
                component={TextInput}
                validate={[rules.required]}
                label="Password"
                required
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <Field
                id="retypePassword"
                name="retypePassword"
                component={TextInput}
                validate={[rules.required, rules.validateReEnterPassword]}
                label="Re-type Password"
                required
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
              Register
            </Button>
            Already have an account?
            <Link component={RouterLink} variant="body2" to="/login">
              Login Now!
            </Link>
          </form>
        </Paper>
      </main>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isFormValid: PropTypes.bool,

  handleSubmit: PropTypes.func,
};
export default withStyles(styles)(reduxForm({ form: FORM_NAME })(RegisterForm));
