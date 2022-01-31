import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DetailsModal from "./modals/DetailsModal";
import bookStore from "../stores/bookStore";
import BorrowModal from "./modals/BorrowModal";
const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);

  const handleClose1 = () => {
    setShow1(false);
    bookStore.returnBook(book.id); //add here store functions to change array of borrowed by and books borrowed
  };
  const handleShow = () => setShow(true);

  const handleReturn = () => {
    // setAvailable(!available);
    bookStore.returnBook(book.id);
  };
  const handleBorrow = () => {
    setShow1(true);
  };

  return (
    <div className="book-list">
      <div className="card">
        <div className="book-title">
          <h4>{book.title}</h4>
          <p>{book.author}</p>
        </div>
        <img src={book.image} className="cover" />
        <div className="add-book">
          <Button variant="Link" onClick={handleShow}>
            Details
          </Button>
          {book.available ? (
            <Button variant="success" onClick={handleBorrow}>
              {" "}
              Borrow
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleReturn}>
              {" "}
              return
            </Button>
          )}
          <BorrowModal show={show1} handleClose={handleClose1} book={book} />
          <DetailsModal show={show} handleClose={handleClose} book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
