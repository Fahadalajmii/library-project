import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import memberStore from "../../stores/memberStore";

function AddMemberModal({ show, handleClose }) {
  const [change, setChange] = useState({
    firstName: "",
    lastName: "",
    membership: "silver",
  });

  const handleChange = (event) => {
    setChange({ ...change, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    memberStore.addMember(change);
    handleClose();
  };
  console.log(change);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
              <Form.Select name="membership" onChange={handleChange}>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Submit!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMemberModal;
