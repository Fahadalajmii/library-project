import "./App.css";
import MembersList from "./MembersList";
import BookList from "./BookList";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memberslist" element={<MembersList />} />
        <Route path="/bookslist" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
