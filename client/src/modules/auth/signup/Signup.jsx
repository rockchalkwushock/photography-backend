import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { InputField } from '../../../commons';
import { signupValidation } from './validate';

const styles = {
  root: {

  }
};

// TODO: Connect actionCreator to form.
// TODO: Connect validation to form.

const Signup = () => (
 <div style={styles.root}>
    <Grid centered columns={3} style={{ height: '90vh' }} verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column>
          <Message
            attached
            header='Welcome to Admin!'
            content='Please register as a user.'
          />
          <Form className='attached fluid segment' >
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
            <Button primary type='submit'>Sign Up</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default reduxForm({
  form: 'signup',
  validate: signupValidation
})(Signup);
