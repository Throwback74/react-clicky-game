import React from "react";
import "./Nav.css";

const Nav = () => (

  <nav className="level is-mobile">
    <div className="level-item has-text-centered">
      <div>
        {/* <p className="heading">Tweets</p> */}
        <p className="title">Clicky Game</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading headInstructions">Click an image to begin!</p>
        {/* <p className="title">123</p> */}
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        {/* <p className="heading"></p> */}
        <p className="title">Score: 0 | Top Score: 0</p>
      </div>
    </div>
    {/* <div className="level-item has-text-centered">
      <div>
        <p className="heading">Likes</p>
        <p className="title">789</p>
      </div>
    </div> */}
  </nav>
);

export default Nav;
