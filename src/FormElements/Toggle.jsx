import { Form } from 'react-bootstrap';

const Toggle = ({ formik }) => {
  const handleToggleChange = (event) => {
    const value = event.target.checked;
    formik.setFieldValue('toggle', value);
  };

  return (
    <Form.Check
      className='mb-4'
      type='switch'
      id='custom-switch'
      label='Off'
      checked={formik.values.toggle}
      onChange={handleToggleChange}
    />
  );
};

export default Toggle;
