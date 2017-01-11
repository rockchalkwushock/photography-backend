import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { InputField } from '../../../commons';
import { signupValidation } from './validate';

const Signup = ({ handleSubmit, signupUser, valid }) => (
 <div className='signup'>
    <Grid centered columns={3} style={{ height: '90vh' }} verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column>
          <Message
            attached
            header='Welcome to Admin!'
            content='Please register as a user.'
          />
          <Form className='attached fluid segment' onSubmit={handleSubmit(signupUser)}>
            <Form.Field>
              <label htmlFor='email'>Email</label>
              <Field
                icon='mail'
                component={InputField}
                placeholder='putinHeartsdonald@yandex.ru'
                name='email'
                type='email'
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='password'>Password</label>
              <Field
                icon='lock'
                component={InputField}
                placeholder='secretKGBpasswordHERE'
                name='password'
                type='password'
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <Field
                icon='lock'
                component={InputField}
                placeholder='secretKGBpasswordHERE'
                name='confirmPassword'
                type='password'
              />
            </Form.Field>
            <Button primary disabled={!valid} type='submit'>Sign Up</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'signup',
  validate: signupValidation
})(Signup);
