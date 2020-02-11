import React, { Fragment } from "react";

// Image
import imagen from "../img/profile.jpeg";
import cv from "../img/cv.png";

// Logos
import logoHtml from "../img/logos/icono_html.jpg";
import logoCss from "../img/logos/icono_css.svg";
import logoExpress from "../img/logos/icono_express.png";
import logoMongo from "../img/logos/icono_mongo.png";
import logoMySql from "../img/logos/icono_mysql.jpg";
import logoPostgres from "../img/logos/icono_postgres.png";
import logoRedux from "../img/logos/icono_redux.png";
import logoWebpack from "../img/logos/icono_webpack.png";
import logoGithub from "../img/logos/icono_github.svg";
import logoJs from "../img/logos/icono_js.svg";
import logoReact from "../img/logos/icono_react.svg";
import logoSass from "../img/logos/icono_sass.svg";
import logoNode from "../img/logos/icono_node.png";

const Index = () => {
  const TechnologiesP = [
    {
      name: "HTML5",
      logo: logoHtml,
      alt: "Icono de HTML5"
    },
    {
      name: "CSS3",
      logo: logoCss,
      alt: "Icono de CSS3"
    },
    {
      name: "SASS",
      logo: logoSass,
      alt: "Icono de SASS"
    },
    {
      name: "JavaScript",
      logo: logoJs,
      alt: "Icono de JavaScript"
    },
    {
      name: "React",
      logo: logoReact,
      alt: "Icono de React"
    },
    {
      name: "Redux",
      logo: logoRedux,
      alt: "Icono de Redux"
    }
  ];

  const TechnologiesS = [
    {
      name: "React Native",
      logo: logoReact,
      alt: "Icono de React Native"
    },
    {
      name: "Node",
      logo: logoNode,
      alt: "Icono de Node"
    },
    {
      name: "Express",
      logo: logoExpress,
      alt: "Icono de Express"
    },
    {
      name: "MongoDB",
      logo: logoMongo,
      alt: "Icono de MongoDB"
    },
    {
      name: "MySQL",
      logo: logoMySql,
      alt: "Icono de MySQL"
    },
    {
      name: "PostgreSQL",
      logo: logoPostgres,
      alt: "Icono de PostgreSQL"
    },
    {
      name: "Webpack",
      logo: logoWebpack,
      alt: "Icono de Webpack"
    },
    {
      name: "Github",
      logo: logoGithub,
      alt: "Icono de Github"
    }
  ];

  return (
    <Fragment>
      <header className="hero" id="start">
        <div className="header-content">
          <img src={imagen} alt="Imagén de perfil" className="img" />

          <div className="info-profile">
            <h1>Front End Developer</h1>
            <p className="italic">¿Buscas Front End Developer?</p>
          </div>
        </div>
      </header>

      <main>
        <div className="bio container">
          <div className="title">
            <h2>Biografía</h2>
            <div className="barra"></div>
          </div>
          <p>Hola, ¿qué tal?</p>
          <p>
            Mi nombre es Juan, tengo 18 años y soy de Venezuela. Me apasiona
            mucho el desarrollo web y la tecnología. Todo lo que hago me dedico
            completamente para que sea lo mejor de lo mejor, soy creativo,
            divertido y te aseguro que te caeré muy bien si me conoces.
          </p>
          <p>
            Soy un Front End Developer con algunos conocimientos de Backend,
            siendo mi Stack el de MERN (MongoDB, Express, React, Node).
          </p>
          <p>
            Si te interesa ver mi Currículum, acá te lo dejo.
          </p>
          <a href={cv} target="_blank" className="btn-cv">Ver Currículum</a>
        </div>

        <div className="skills" id="skills">
          <div className="container">
            <div className="title">
              <h2>Habilidades</h2>
              <div className="barra"></div>
            </div>

            <div className="technologies">
              <div className="skills-container">
                <div className="primary">
                  <h3>Tecnologías principales</h3>

                  <div className="grid-skills responsive-flex-column">
                    {TechnologiesP.map(tech => (
                      <div className="skill responsive-flex-column">
                        <img src={tech.logo} alt={tech.alt} />
                        <p>{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="secondary">
                  <h3>Tecnologías adicionales</h3>

                  <div className="grid-skills responsive-flex-column">
                  {TechnologiesS.map(tech => (
                      <div className="skill responsive-flex-column">
                        <img src={tech.logo} alt={tech.alt} />
                        <p>{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Index;
