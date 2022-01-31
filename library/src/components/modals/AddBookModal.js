import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import bookStore from "../../stores/bookStore";

function AddBookModal({ show, handleClose }) {
  const [change, setChange] = useState({
    author: "",
    title: "",
    genre: "Self-Help",
  });

  const handleChange = (event) => {
    setChange({ ...change, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore.addBook(change);
    handleClose();
  };
  console.log(change);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>book author</Form.Label>
              <Form.Control
                name="author"
                onChange={handleChange}
                placeholder="enter author name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>title</Form.Label>
              <Form.Control
                name="title"
                onChange={handleChange}
                placeholder="enter the book title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>genre type </Form.Label>
              <Form.Select name="genre" onChange={handleChange}>
                <option value="Self-Help">Self-Help</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Suspense">Suspense</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Biography">Biography</option>
                <option value="Business">Business</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Crime">Crime</option>
                <option value="Mystery">Mystery</option>
                <option value="Fiction">Fiction</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>book image</Form.Label>
              <Form.Control
                name="image"
                onChange={handleChange}
                placeholder="insert book image"
              />
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

export default AddBookModal;
