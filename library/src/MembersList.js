import React, { useState } from "react";
import AddMemberModal from "./components/modals/AddMemberModal";

import MemberForm from "./MemberForm";
import { observer } from "mobx-react";
import memberStore from "./stores/memberStore";
import { Button } from "react-bootstrap";

const MembersList = () => {
  const [show, setShow] = useState(false);
  let membersArray = memberStore.members.map((member) => (
    <MemberForm member={member} />
  ));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {membersArray}
      <Button variant="primary" onClick={handleShow}>
        Add new member
      </Button>
      <AddMemberModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default observer(MembersList);
