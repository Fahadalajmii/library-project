import React, { useState } from "react";
import members from "./components/Members";
import MemberForm from "./MemberForm";
const MembersList = () => {
  const [displayMembers, setDisplayMembers] = useState(members);

  let membersArray = members.map((member) => <MemberForm member={member} />);

  return <div className="container">{membersArray}</div>;
};

export default MembersList;
