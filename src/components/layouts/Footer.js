import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => (
  <footer id="contact">
    <div className="container footer responsive-flex-column">
      <nav className="menu-footer">
        <ul>
          <li>
            <a href="https://www.facebook.com/wcarlitow" target="_blank">
              <FaFacebookSquare size={50} />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=584121556808&text=Hola,%20¿qué%20tal%20estás?"
              target="_blank"
            >
              <FaWhatsappSquare size={50} />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/CarlosBarrios045" target="_blank">
              <FaGithubSquare size={50} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/carlosbarrios045"
              target="_blank"
            >
              <FaLinkedin size={50} />
            </a>
          </li>
        </ul>
      </nav>

      <div className="contact">
        <h2>Juan Carlos Barrios Sánchez</h2>
        <h3>
          <FaEnvelope /> juanbarrios045@gmail.com
        </h3>
        <h3>
          <FaMobileAlt /> +58412 - 1556808
        </h3>
        <h3>Estado Portuguesa - Venezuela.</h3>
      </div>
    </div>
  </footer>
);

export default Footer;
