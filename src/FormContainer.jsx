import { Form, Button, Row, Col } from 'react-bootstrap';
import Username from './FormElements/Username';
import Password from './FormElements/Password';
import InputText from './FormElements/InputText';
import Checkbox from './FormElements/Checkbox';
import Toggle from './FormElements/Toggle';
import RadioGroup from './FormElements/RadioGroup';
import DropdownMenu from './FormElements/DropdownMenu';
import { useFormik } from 'formik';

const FormContainer = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      inputText: '',
      checkbox: false,
      toggle: false,
      radioSection: 'None',
      dropdowns: 'Dropdown option',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form className='mt-3 w-100' onSubmit={formik.handleSubmit}>
      <Username formik={formik} />
      <Password formik={formik} />
      <InputText formik={formik} />
      <Checkbox formik={formik} />
      <Toggle formik={formik} />
      <RadioGroup formik={formik} />
      <DropdownMenu formik={formik} />
      <div className='w-100'>
        <Row className=' mb-5'>
          <Col className='d-flex'>
            <Button variant='outline-primary' onClick={formik.resetForm}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button variant='primary' type='submit'>
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default FormContainer;
