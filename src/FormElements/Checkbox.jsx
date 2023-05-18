import { Form } from 'react-bootstrap';

const Checkbox = ({ formik }) => {
  return (
    <Form.Group className='mb-4' controlId='formBasicCheckbox'>
      <Form.Check
        type='checkbox'
        name='checkbox'
        label='Remember me'
        value='Checked'
        onChange={formik.handleChange}
      />
    </Form.Group>
  );
};

export default Checkbox;
