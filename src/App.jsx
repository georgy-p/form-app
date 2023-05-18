import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormContainer from './FormContainer';

const App = () => {
  return (
    <div style={{ background: '#E4DEFE', height: '100vh' }}>
      <Container>
        <Row className='d-flex align-items-center justify-content-center'>
          <Col sm={8} lg={6} style={{ background: 'white' }} className='p-5'>
            <FormContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
