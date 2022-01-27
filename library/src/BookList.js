import React, { useState } from "react";
import AddBookModal from "./components/modals/AddBookModal";

import BookForm from "./BookForm";
import { observer } from "mobx-react";
import bookStore from "./stores/bookStore";
import { Button } from "react-bootstrap";

const BooksList = () => {
  const [show, setShow] = useState(false);
  let booksArray = bookStore.books.map((book) => <BookForm book={book} />);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {booksArray}
      <Button variant="primary" onClick={handleShow}>
        Add new book
      </Button>
      <AddBookModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default observer(BooksList);
