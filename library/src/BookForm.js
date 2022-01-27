import React, { useState } from "react";
const BookForm = ({ book }) => {
  const [detail, setDetail] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [borrowed, setBorrowed] = useState([]);

  const handleDetail = () => {
    setDetail(book.genre);
    setIsAvailable(book.available);
    setBorrowed(book.borrowedBy);
  };
  return (
    <div className="form">
      <h4>{book.title}</h4>

      <p>{book.author}</p>
      <button onClick={handleDetail}>book details</button>
      {detail !== [] ? (
        <h3>
          borrowed by:
          {borrowed.join("-")}
        </h3>
      ) : (
        <></>
      )}

      {detail !== "" ? <h3>{detail}</h3> : <></>}

      {detail !== "" ? (
        <h3>availability: {isAvailable ? " Available " : " out of stock "}</h3>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BookForm;
