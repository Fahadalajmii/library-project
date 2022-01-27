import React from "react";
import memberStore from "../stores/memberStore";
import members from "./Members";

import { Navigate, useParams } from "react-router-dom";

const MemberDetail = () => {
  const { memberID } = useParams();
  const member = members[memberID - 1];
  return (
    <div>
      <h1>{member.firstName}</h1>
      <h1>{member.lastName}</h1>
      <h1>{member.membership}</h1>
      <h1>{member.currentlyBorrowedBooks}</h1>
    </div>
  );
};

export default MemberDetail;
