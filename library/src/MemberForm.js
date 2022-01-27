import React, { useState } from "react";
const MemberForm = ({ member }) => {
  const [detail, setDetail] = useState([]);

  const handleDetail = () => {
    setDetail(member.currentlyBorrowedBooks);
  };
  return (
    <div className="form">
      <h4>{member.slug}</h4>

      <p>{member.membership}</p>
      <button onClick={handleDetail}>member details</button>
      {detail !== [] ? (
        <h3>
          borrowed books:
          {detail.join("-")}
        </h3>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MemberForm;
