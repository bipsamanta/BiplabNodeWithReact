import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { isAuthenticated, deleteCookie } from 'containers/App/auth';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  logout = () => {
    deleteCookie();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit" component={Link} to="/">
              <FormattedMessage {...messages.home} />
            </Button>
            {isAuthenticated() && (
              <Button color="inherit" component={Link} to="/EmployeeDetails">
                Add New
              </Button>
            )}
            {!isAuthenticated() && (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                color="inherit"
                component={Link}
                to="/login"
                onClick={this.logout}
              >
                Logout
              </Button>
            )}
            <section>
              <LocaleToggle />
            </section>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
