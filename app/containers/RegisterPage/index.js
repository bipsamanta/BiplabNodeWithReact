/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { isValid } from 'redux-form/immutable';
import { compose } from 'redux';
import { submit } from 'redux-form';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import RegisterForm from './registerForm';
import { saveUser } from './actions';

const FORM_NAME = 'registerForm';

/* eslint-disable react/prefer-stateless-function */
export class RegisterPage extends React.PureComponent {
  handleSubmit = values => {
    const data = {
      userName: values.get('email'),
      password: values.get('password'),
    };
    this.props.saveUserData(data);
  };

  render() {
    const { isFormValid } = this.props;
    return (
      <div>
        <Helmet>
          <title>RegisterPage</title>
          <meta name="description" content="Description of RegisterPage" />
        </Helmet>
        <RegisterForm isFormValid={isFormValid} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  isFormValid: PropTypes.bool,
  saveUserData: PropTypes.func,
};

const mapStateToProps = state => ({
  isFormValid: isValid(FORM_NAME)(state),
});

function mapDispatchToProps(dispatch) {
  return {
    submitForm: () => dispatch(submit(FORM_NAME)),
    saveUserData: userInfo => dispatch(saveUser(userInfo)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage);
