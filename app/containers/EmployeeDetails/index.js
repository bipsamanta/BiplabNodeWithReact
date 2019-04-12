/**
 *
 * EmployeeDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isValid } from 'redux-form/immutable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import EmployeeDetailsForm from './EmployeeDetailsForm';
import { getNames, employeeLogin, updateCommonInfo } from './actions';

const FORM_NAME = 'EmployeeDetailsForm';
/* eslint-disable react/prefer-stateless-function */
export class EmployeeDetails extends React.PureComponent {
  handleSubmit = values => {
    const data = {
      name: values.get('name'),
      email: values.get('email'),
      gender: values.get('gender'),
      designation: values.get('designation'),
      dob: values.get('dob'),
    };
    // const data = { userName: 'Biplab', password: '123' };
    // const commonInfo = {
    //   age: 30,
    // };
    // this.props.updateCommonInfo(commonInfo);
    // this.props.requestLoginInfo(data);
  };

  componentDidMount() {
    // this.props.requestNames();
  }

  render() {
    const { isFormValid } = this.props;
    return (
      <div>
        <EmployeeDetailsForm
          isFormValid={isFormValid}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

EmployeeDetails.propTypes = {
  isFormValid: PropTypes.bool,

  requestNames: PropTypes.func,
  requestLoginInfo: PropTypes.func,
  updateCommonInfo: PropTypes.func,
};

const mapStateToProps = state => ({
  isFormValid: isValid(FORM_NAME)(state),
});

function mapDispatchToProps(dispatch) {
  return {
    requestNames: () => dispatch(getNames()),
    requestLoginInfo: data => dispatch(employeeLogin(data)),
    updateCommonInfo: commonInfo => dispatch(updateCommonInfo(commonInfo)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'employeeDetails', reducer });
const withSaga = injectSaga({ key: 'employeeDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EmployeeDetails);
