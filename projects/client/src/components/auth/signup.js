import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm}} = this.props;
    return (
      <form>
        <fieldset className="form-group">  
          <label>Email:</label>
          <input className="form-control" {...email} />
        </fieldset>
        <fieldset className="form-group">  
          <label>Password:</label>
          <input className="form-control"  {...password} type="password"/>
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">  
          <label>Confirm Password:</label>
          <input className="form-control" {...passwordConfirm} type="password"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if( formProps.password !== formProps.passwordConfirm) {
    errors.password = "Password must match";
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email','password','passwordConfirm'],
  validate //form有任何变化都会实时调用这个函数
})(Signup);