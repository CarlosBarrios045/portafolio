import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = ({ location }) => {
  useEffect(() => {
    const nav = document.getElementById("nav");

    window.onscroll = () => {
      if (window.pageYOffset > 30) {
        nav.style.background = "#3e4756";
        nav.style.boxShadow = "0px 3px 6px 0px rgba(0,0,0,0.75)";
      } else {
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
      }
    };
  }, []);

  const showMenu = () => {
    const menuToggleIcon = document.querySelector(".menu-toggle i");
    const menu = document.getElementById("menu");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
      menuToggleIcon.setAttribute("class", "fa fa-times");
    } else {
      menuToggleIcon.setAttribute("class", "fa fa-bars");
    }
  };

  return (
    <nav className="navbar responsive-flex-column" id="nav">
      <div className="nav-header">
        <Link to="/" className="logo">
          JB
        </Link>
        <div className="menu-toggle" onClick={showMenu}>
          <a>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>

      <ul className="menu" id="menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        { location.pathname === "/" ? (
          <li>
            <a href="#skills">habilidades</a>
          </li>
        ) : null }
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
