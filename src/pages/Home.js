import React, { Fragment } from "react";

// Image
import imagen from "../img/profile.jpg";

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
                    <div className="skill responsive-flex-column">
                      <img src={logoHtml} alt="Icono de HTML5" />
                      <p>HTML5</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoCss} alt="Icono de CSS3" />
                      <p>CSS3</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoSass} alt="Icono de SASS" />
                      <p>SASS</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoJs} alt="Icono de JavaScript" />
                      <p>JavaScript</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoReact} alt="Icono de React" />
                      <p>React</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoRedux} alt="Icono de Redux" />
                      <p>Redux</p>
                    </div>
                  </div>
                </div>

                <div className="secondary">
                  <h3>Tecnologías adicionales</h3>

                  <div className="grid-skills responsive-flex-column">
                    <div className="skill responsive-flex-column">
                      <img src={logoNode} alt="Icono de Node" />
                      <p>NodeJS</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoExpress} alt="Icono de Express" />
                      <p>Express</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoMongo} alt="Icono de MongoDB" />
                      <p>MongoDB</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoMySql} alt="Icono de MySQL" />
                      <p>MySQL</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoPostgres} alt="Icono de PostgreSQL" />
                      <p>PostgreSQL</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoWebpack} alt="Icono de Webpack" />
                      <p>Webpack</p>
                    </div>
                    <div className="skill responsive-flex-column">
                      <img src={logoGithub} alt="Icono de Github" />
                      <p>Github</p>
                    </div>
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
