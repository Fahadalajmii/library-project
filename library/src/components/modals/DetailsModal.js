import React from "react";
import { Modal, Button } from "react-bootstrap";

const DetailsModal = ({ show, handleClose, book }) => {
  return (
    <div>
      {/* <!-- Vertically centered modal --> */}
      <div class="modal-dialog modal-dialog-centered">
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Book Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h3>Borrowed By: </h3>
                <h3> {book.borrowedBy} </h3>

                <h3>Genre: {book.genre}</h3>

                <h3>
                  availability:{" "}
                  {book.available ? " Available " : " out of stock "}
                </h3>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </div>
  );
};

export default DetailsModal;
