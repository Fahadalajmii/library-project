import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DetailsModal from "./modals/DetailsModal";
const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="book-list">
      <div className="card">
        <div className="book-title">
          <h4>{book.title}</h4>

          <p>{book.author}</p>
        </div>

        <div className="add-book">
          <Button variant="primary" onClick={handleShow}>
            Details
          </Button>
        </div>

        <DetailsModal show={show} handleClose={handleClose} book={book} />
      </div>
    </div>
  );
};

export default BookCard;
