import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

// Material UI
import { IconButton } from "@material-ui/core";

// Icons
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    const nav = document.getElementById("nav");

    window.onscroll = () => {
      if (window.pageYOffset > 30) {
        nav.style.background = "#3e4756";
        nav.style.boxShadow =
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)";
      } else {
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
      }
    };
  }, []);

  const showMenu = () => {
    const menu = document.getElementById("menu");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  return (
    <nav className="navbar responsive-flex-column" id="nav">
      <div className="nav-header">
        <Link to="/" className="logo">
          JB
        </Link>
        <IconButton>
          <div className="menu-toggle" onClick={showMenu}>
            <a>{openMenu ? <FaBars /> : <FaTimes />}</a>
          </div>
        </IconButton>
      </div>

      <ul className="menu" id="menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {location.pathname === "/" && (
          <li>
            <a href="#skills">habilidades</a>
          </li>
        )}
        <li>
          <Link to="/projects">Proyectos</Link>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
