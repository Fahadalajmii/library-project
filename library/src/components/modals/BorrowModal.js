import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import memberStore from "../../stores/memberStore";

const BorrowModal = ({ show, handleClose, setMemberId }) => {
  const handleChange = (event) => {
    setMemberId(event.target.value);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Who's borrowing the book?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Member name</Form.Label>
            <Form.Select onChange={handleChange}>
              {memberStore.members.map((member) => (
                <option value={member.id}>
                  {member.firstName} {member.lastName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BorrowModal;
