import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
const Diaglog = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => open(),
    close: () => close(),
  }));

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={close}
      backdrop="static"
      keyboard={false}
      size={props.size}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props?.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{props?.children}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onSubmit}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

Diaglog.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.string,
};
export default Diaglog;
