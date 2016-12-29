export const signupValidation = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is Required';
  } else if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is Required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password must match the password';
  }

  return errors;
};
