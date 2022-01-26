import "./App.css";
import MembersList from "./MembersList";
import AddMemberModal from "./components/modals/AddMemberModal";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <MembersList />
      <Button variant="primary" onClick={handleShow}>
        Add new member
      </Button>
      <AddMemberModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default App;
