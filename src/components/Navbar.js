import React, { useState } from "react";
import "../styles/Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <h1>
        the <span>streamer</span>
      </h1>
      <ul className={open ? "links-open" : "links"}>
        <li>
          <a href="#header-body">Action</a>
        </li>
        <li>
          <a href="#header-body">Adventure</a>
        </li>
        <li>
          <a href="#header-body">Horror</a>
        </li>
        <li>
          <a href="#header-body">Comedy</a>
        </li>
        <div className={open ? "subscribe-btn-open" : "subscribe-btn"}>
          <button>Subscribe</button>
        </div>
      </ul>

      <button onClick={openMenu} className="menu-btn">
        <i className={"fa-solid fa-bars"}></i>
      </button>
    </nav>
  );
}

export default Navbar;
