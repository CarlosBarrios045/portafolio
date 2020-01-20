import React from "react";

const Footer = () => (
  <footer id="contact">
    <div className="container footer responsive-flex-column">
      <nav className="menu-footer">
        <ul>
          <li>
            <a href="https://www.facebook.com/wcarlitow" target="_blank">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/CarlosBarrios045" target="_blank">
              <i className="fab fa-github-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carlosbarrios045" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div className="contact">
        <h2>Juan Carlos Barrios Sánchez</h2>
        <h3>
          <i className="fas fa-envelope"></i> juanbarrios045@gmail.com
        </h3>
        <h3>
          <i className="fas fa-mobile-alt"></i> +58412 - 1556808
        </h3>
        <h3>Estado Portuguesa - Venezuela.</h3>
      </div>
    </div>
  </footer>
);

export default Footer;
