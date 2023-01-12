import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import './styles.css'


const InfoModal = ({data}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="rounded-circle text-dark bg-light translate-middle badge" variant="outline-dark" size="sm" onClick={() => setShow(true)}>
        <i className="fas fa-info-circle"></i>
        &#9432;
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.content}</Modal.Body>
        <Modal.Body>
          <img src={data.image} width="100%" height="auto" alt="grain-size"/>
        </Modal.Body>
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