import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { InputField } from '../../../commons';
import { loginValidation } from './validate';

const Login = ({ handleSubmit, loginUser, translate, valid }) => (
  <div className='login'>
    <Grid centered columns={3} style={{ height: '90vh' }} verticalAlign="middle">
      <Grid.Row>
        <Grid.Column>
          <Message
            attached
            header={translate('welcome')}
            content={translate('login-prompt')}
          />
          <Form className="attached fluid segment" onSubmit={handleSubmit(loginUser)}>
            <Form.Field>
              <label htmlFor='email'>{translate('email')}</label>
              <Field
                icon="mail"
                component={InputField}
                placeholder="putinHeartsdonald@yandex.ru"
                name="email"
                type="email"
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='password'>{translate('password')}</label>
              <Field
                icon="lock"
                component={InputField}
                placeholder="secretKGBpasswordHERE"
                name="password"
                type="password"
              />
            </Form.Field>
            <Button disabled={!valid} primary type="submit">{translate('login')}</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  translate: PropTypes.func,
  valid: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'login',
  validate: loginValidation
})(Login);
