import { Dropdown } from 'react-bootstrap';

const DropdownMenu = ({ formik }) => {
  const handleDropdownSelect = (event) => {
    formik.setFieldValue('dropdowns', event);
  };

  return (
    <>
      <div className='form-label'>Dropdown Title</div>
      <Dropdown
        style={{ marginBottom: '140px' }}
        onSelect={handleDropdownSelect}
      >
        <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
          Dropdown option
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey='Dropdown option'>
            Dropdown option
          </Dropdown.Item>
          <Dropdown.Item eventKey='Dropdown option 1'>
            Dropdown option 1
          </Dropdown.Item>
          <Dropdown.Item eventKey='Dropdown option 2'>
            Dropdown option 2
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
