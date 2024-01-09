import React, { useState } from "react";
import "./style.scss";
import Modal from "react-bootstrap/Modal";

const ProjectsModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <div className="projectsModal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Woohoo, you are reading this text in a modal!
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectsModal;
