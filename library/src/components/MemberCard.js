import React from "react";

const MemberCard = ({ member }) => {
  return (
    <div className="flip-card">
      <div className="mem-card">
        <div className="name">
          <h5>{member.firstName}</h5>
          <h5>{member.lastName}</h5>
        </div>
        {/* <div className="add">
          <button onClick={handleborrowed}>member details</button>
        </div> */}

        <div className="details">
          <h4>books Borrowed: {member.currentlyBorrowedBooks}</h4>
          <h4>Membership: {member.membership}</h4>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
