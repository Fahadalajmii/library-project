import React, { useState } from "react";
import AddBookModal from "./components/modals/AddBookModal";

import BookCard from "./components/BookCard";
import { observer } from "mobx-react";
import bookStore from "./stores/bookStore";
import { Button } from "react-bootstrap";

const BooksList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [query, setquery] = useState("");
  const [type, settype] = useState("");

  const booksArray = bookStore.books
    .filter((book) => {
      console.log(book.title);
      return type
        ? book.genre.includes(type) &&
            book.title.toLowerCase().includes(query.toLowerCase())
        : book.title.toLowerCase().includes(query.toLowerCase());
    })
    .map((book) => <BookCard book={book} key={book.id} />);

  const changeQuery = (event) => {
    setquery(event.target.value);
  };
  const changeType = (event) => {
    settype(event.target.value);
  };

  return (
    <div className="page">
      <div className="search">
        <div className="input-group rounded ">
          <input
            onChange={changeQuery}
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
      </div>
      <br />
      <div className="search">
        <select onChange={changeType} className="form-select">
          <option value="" selected>
            All
          </option>
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
        </select>
      </div>

      <div className="grid">{booksArray}</div>
      <Button variant="primary" onClick={handleShow}>
        Add new book
      </Button>
      <AddBookModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default observer(BooksList);
