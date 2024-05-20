import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const a = () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener("scroll", a);
    return () => {
      window.removeEventListener("scroll", a);
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
