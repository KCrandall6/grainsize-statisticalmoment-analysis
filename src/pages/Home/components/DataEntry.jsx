import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DataEntry = () => {

  const phiSizes = [-2.5, -2.0, -1.5, -1, -0.5, 0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0];

  return(
    <div className='d-flex inline-flex' >
      <Form>
      <p>Enter Weight by Seive Size (ϕ)</p>
        {phiSizes.map((size) => (
          <Form.Group key={size} as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            {size.toFixed(1)}
          </Form.Label>
          <Col sm={3}>
            <Form.Control type="email" placeholder="0" />
          </Col>
        </Form.Group>
        ))}

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            pan
          </Form.Label>
          <Col sm={3}>
            <Form.Control type="email" placeholder="0" />
          </Col>
        </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col >
          <Button type="submit">Generate Report</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  )
}

export default DataEntry;