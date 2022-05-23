import React, { useState } from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <h1>
        <Link to={"/"}>
          the <span>streamer</span>{" "}
        </Link>
      </h1>
      <ul className={open ? "links-open" : "links"}>
        <li>
          <Link to={"/action"}>Action</Link>
        </li>
        <li>
          <Link to={"/adventure"}>Adventure</Link>
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
