import React from "react";
const MemberForm = ({ member }) => {
  return (
    <div className="form">
      <h4>{member.slug}</h4>
      <p>{member.membership}</p>
    </div>
  );
};

export default MemberForm;
