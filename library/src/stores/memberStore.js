import { action, makeAutoObservable } from "mobx";
import data from "../components/Members";

class MemberStore {
  members = data;
  constructor() {
    makeAutoObservable(this, {
      addMember: action,
    });
  }
  addMember = (member) => {
    member.id = this.members[this.members.length - 1].id + 1;
    member.currentlyBorrowedBooks = [];
    member.slug =
      member.firstName.toLowerCase() + "-" + member.lastName.toLowerCase();
    this.members.push(member);
  };
}

const memberStore = new MemberStore();

export default memberStore;
