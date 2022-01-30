import React, { useState } from "react";
import AddBookModal from "./components/modals/AddBookModal";

import BookCard from "./components/BookCard";
import { observer } from "mobx-react";
import bookStore from "./stores/bookStore";
import { Button } from "react-bootstrap";

const BooksList = () => {
  const [show, setShow] = useState(false);
  let booksArray = bookStore.books.map((book) => <BookCard book={book} />);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="page">
      <div className="grid">{booksArray}</div>

      <Button variant="primary" onClick={handleShow}>
        Add new book
      </Button>
      <AddBookModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default observer(BooksList);
