import { Form } from 'react-bootstrap';

const Username = ({ formik }) => {
  return (
    <Form.Group className='mb-4'>
      <Form.Label>Username</Form.Label>
      <Form.Control
        type='username'
        placeholder='Enter username'
        {...formik.getFieldProps('username')}
      />
    </Form.Group>
  );
};

export default Username;
