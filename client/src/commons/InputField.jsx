import React from 'react';
import { Form, Message } from 'semantic-ui-react';

const InputField = ({ placeholder, input, icon, type, meta: { touched, error } }) => (
  <div>
    <Form.Input
      iconPosition={icon && 'left'}
      icon={icon}
      {...input}
      placeholder={placeholder}
      type={type}
    />
    {touched && error && <Message size='mini'>{error}</Message>}
  </div>
);

export default InputField;
