import { TextField } from "@material-ui/core";
import React from "react";
import { Modal, Button } from "react-bootstrap";
export default function ModalComponent(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="text-center ml-5" closeButton>
          <Modal.Title >We Will Contact You Shortly   <br/>Leave Your Details </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center mt-3 mr-4">
          {" "}
          <TextField id="standard-basic" fullWidth className='m-3' label="Name" /> <br/>
          <TextField id="standard-basic" fullWidth className='m-3' label="Email" /><br/>
          <TextField id="standard-basic" fullWidth className='m-3' label="Number" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}
