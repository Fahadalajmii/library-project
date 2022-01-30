import "./App.css";
import MembersList from "./MembersList";
import BookList from "./BookList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navi from "./components/NavBar";

function App() {
  return (
    <div className="bodyy">
      <Navi />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<MembersList />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/:slug" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
