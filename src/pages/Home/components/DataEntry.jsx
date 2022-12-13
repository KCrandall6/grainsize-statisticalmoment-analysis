import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DataEntry = ({phiData, setPhiData, dataSubmit}) => {

  const phiSizes = [-2.5, -2.0, -1.5, -1, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0];

  const onFormChange = (e) => {
    let phi = e.target.name;
    let value = e.target.value;
    if (value === "") {
      value = 0;
    }
    if (isNaN(phi)) {
      if (phi === 'pan') setPhiData({...phiData, 'pan': value});
      if (phi === 'sample name') setPhiData({...phiData, 'sample name': value});
    } else {
      phi = Number(e.target.name).toFixed(1);
      setPhiData({...phiData, [phi]: value});
    }
  }

  return(
    <div className='d-flex inline-flex p-4' >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sample Name</Form.Label>
          <Form.Control name="sample name" onChange={onFormChange} type="email" placeholder="Sample Name" />
        </Form.Group>
      <p>Enter Weight by Seive Size (ϕ)</p>
        {phiSizes.map((size) => (
          <Form.Group key={size} as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            {size.toFixed(1)}
          </Form.Label>
          <Col sm={4}>
            <Form.Control name={size} onChange={onFormChange} type="email" placeholder="0" />
          </Col>
        </Form.Group>
        ))}

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            pan
          </Form.Label>
          <Col sm={4}>
            <Form.Control name="pan" onChange={onFormChange} type="email" placeholder="0" />
          </Col>
        </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col >
          <Button onClick={() => dataSubmit()}>Generate Report</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  )
}

export default DataEntry;