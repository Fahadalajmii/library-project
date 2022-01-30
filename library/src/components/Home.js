import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <Link to={"/books"}>
          <div className="togo">
            <img
              className="imag"
              src={
                "https://images.unsplash.com/photo-1554290410-4be2dfbe66f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3MlMjBvbiUyMGElMjBzaGVsZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt="books"
            />
            <h1 className="desc">Books</h1>
          </div>
        </Link>

        <Link to={"/members"}>
          <div className="togo">
            <img
              className="imag"
              src={
                "https://images.pexels.com/photos/5095930/pexels-photo-5095930.jpeg?cs=srgb&dl=pexels-cottonbro-5095930.jpg&fm=jpg"
              }
              alt="members"
            />
            <h1 className="mem">Members </h1>
          </div>
        </Link>
      </div>
      <footer>© All rights reserved</footer>
    </div>
  );
};

export default Home;
