import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { Link as RouterLink } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
const FORM_NAME = 'loginForm';

class LoginForm extends React.PureComponent {
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
            Sign in
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth>
              <Field
                id="email"
                name={`${this.props.intl.locale}email`}
                component={TextInput}
                validate={[rules.required]}
                label="Email Address"
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <Field
                id="password"
                name={`${this.props.intl.locale}password`}
                component={TextInput}
                validate={[rules.required]}
                label="Password"
                autoFocus
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!isFormValid}
              onClick={this.props.handleSubmit}
            >
              Sign in
            </Button>
            <div className="row">
              <Link component={RouterLink} variant="body2" to="/register">
                Register Now!
              </Link>
            </div>
          </form>
        </Paper>
      </main>
    );
  }
}
LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isFormValid: PropTypes.bool,
  intl: intlShape,

  handleSubmit: PropTypes.func,
};
export default withStyles(styles)(
  reduxForm({
    form: FORM_NAME,
    enableReinitialize: true,
  })(injectIntl(LoginForm)),
);
