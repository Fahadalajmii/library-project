import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function AddMemberModal({ show, handleClose }) {
  const [change, setChange] = useState({ firstname: "", type: "silver" });

  const handleChange = (event) => {
    setChange({ ...change, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Group className="mb-3">
              <Form.Label>first name</Form.Label>
              <Form.Control
                name="firstName"
                onChange={handleChange}
                placeholder="enter first name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>last name</Form.Label>
              <Form.Control
                name="lastName"
                onChange={handleChange}
                placeholder="enter last name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Membership type </Form.Label>
              <Form.Select name="type" onChange={handleChange}>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>enter Book title</Form.Label>
              <Form.Control
                name="title"
                onChange={handleChange}
                placeholder="enter book title"
              />
            </Form.Group>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMemberModal;
