import React, { useState } from "react";
import AddMemberModal from "./components/modals/AddMemberModal";

import MemberCard from "./components/MemberCard";
import { observer } from "mobx-react";
import memberStore from "./stores/memberStore";
import { Button } from "react-bootstrap";

const MembersList = () => {
  const [show, setShow] = useState(false);
  let membersArray = memberStore.members.map((member) => (
    <MemberCard member={member} />
  ));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="list">
      <div className="items">
        <div className="array">{membersArray}</div>
      </div>

      <div className="add-btn">
        <Button variant="primary" onClick={handleShow}>
          Add new member
        </Button>
        <AddMemberModal show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default observer(MembersList);
