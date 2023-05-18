import { Form } from 'react-bootstrap';

const RadioGroup = ({ formik }) => {
  return (
    <div>
      <Form.Check
        className='mb-4'
        name='radioSection'
        type='radio'
        id='Radio selection 1'
        label='Radio selection 1'
        value='Radio selection 1'
        onChange={formik.handleChange}
      />
      <Form.Check
        className='mb-4'
        name='radioSection'
        type='radio'
        id='Radio selection 2'
        label='Radio selection 2'
        value='Radio selection 2'
        onChange={formik.handleChange}
      />
      <Form.Check
        className='mb-4'
        name='radioSection'
        type='radio'
        id='Radio selection 3'
        label='Radio selection 3'
        value='Radio selection 3'
        onChange={formik.handleChange}
      />
    </div>
  );
};

export default RadioGroup;
