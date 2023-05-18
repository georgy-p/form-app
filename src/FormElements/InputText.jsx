import { Form } from 'react-bootstrap';

const InputText = ({ formik }) => {
  return (
    <Form.Group className='mb-4' controlId='formBasicPassword'>
      <Form.Label>Input Text Label</Form.Label>
      <Form.Control
        type='inputText'
        placeholder='Typing |'
        {...formik.getFieldProps('inputText')}
      />
    </Form.Group>
  );
};

export default InputText;
