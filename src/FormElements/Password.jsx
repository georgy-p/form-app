import { Form } from 'react-bootstrap';

const Password = ({ formik }) => {
  return (
    <Form.Group className='mb-4'>
      <Form.Label>Password</Form.Label>
      <Form.Control
        type='password'
        placeholder='Password'
        {...formik.getFieldProps('password')}
      />
      <Form.Text className='text-muted'>
        Your password is between 4 and 12 characters
      </Form.Text>
    </Form.Group>
  );
};

export default Password;
