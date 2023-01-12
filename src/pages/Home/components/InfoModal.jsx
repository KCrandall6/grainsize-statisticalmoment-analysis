import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './styles.css'


const InfoModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="rounded-pill bg-light" variant="outline-secondary" size="sm" onClick={() => setShow(true)}>
        <i className="fas fa-info-circle"></i>
        ?
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal content here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InfoModal;