import React, { Fragment } from "react";

// Image
import imagen from "../img/profile.jpeg";
import cv from "../img/cv.png";

// Logos
import logoJs from "../img/logos/icono_js.svg";
import logoReact from "../img/logos/icono_react.svg";
import logoRedux from "../img/logos/icono_redux.png";
import logoNext from "../img/logos/icono_next.png";
import logoSass from "../img/logos/icono_sass.svg";
import logoFirebase from "../img/logos/icono_firebase.png";
import logoNode from "../img/logos/icono_node.png";
import logoExpress from "../img/logos/icono_express.png";
import logoMongo from "../img/logos/icono_mongo.png";
import logoGraphql from "../img/logos/icono_graphql.png";
import logoGithub from "../img/logos/icono_github.svg";

// Material UI
import { Button } from "@material-ui/core";

// styles
import styles from "./styles";

const Index = () => {
  const classes = styles();
  const TechnologiesP = [
    {
      name: "JavaScript",
      logo: logoJs,
      alt: "Icono de JavaScript",
    },
    {
      name: "React",
      logo: logoReact,
      alt: "Icono de React",
    },
    {
      name: "Redux",
      logo: logoRedux,
      alt: "Icono de Redux",
    },
  ];

  const TechnologiesS = [
    {
      name: "Next",
      logo: logoNext,
      alt: "Icono de Next",
    },
    {
      name: "React Native",
      logo: logoReact,
      alt: "Icono de React Native",
    },
    {
      name: "SASS",
      logo: logoSass,
      alt: "Icono de SASS",
    },
    {
      name: "Firebase",
      logo: logoFirebase,
      alt: "Icono de Firebase",
    },
    {
      name: "Node",
      logo: logoNode,
      alt: "Icono de Node",
    },
    {
      name: "Express",
      logo: logoExpress,
      alt: "Icono de Express",
    },
    {
      name: "MongoDB",
      logo: logoMongo,
      alt: "Icono de MongoDB",
    },
    {
      name: "GraphQL",
      logo: logoGraphql,
      alt: "Icono de GraphQL",
    },
    {
      name: "Github",
      logo: logoGithub,
      alt: "Icono de Github",
    },
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
        <div className="bio container2">
          <div className="title">
            <h2>Biografía</h2>
            <div className="barra"></div>
          </div>
          <div className="description">
            <p>Hola, ¿qué tal?</p>
            <p>
              Mi nombre es Juan, tengo 19 años y soy de Venezuela. Me apasiona
              mucho el desarrollo web y la tecnología. Todo lo que hago me
              dedico completamente para que sea lo mejor de lo mejor, soy
              creativo, divertido y te aseguro que te caeré muy bien si me
              conoces.
            </p>
            <p>
              Soy un Front End Developer con 10 meses de experiencial laboral.
              También tengo algunos conocimientos de Backend, siendo mi Stack el
              de MERN (MongoDB, Express, React, Node).
            </p>
            <p>Si te interesa ver mi Currículum, acá te lo dejo.</p>
          </div>
          <Button
            variant="contained"
            href={cv}
            target="_blank"
            className={classes.btn}
          >
            Ver Currículum
          </Button>
        </div>

        <div className="skills" id="skills">
          <div className="container2">
            <div className="title">
              <h2>Habilidades</h2>
              <div className="barra"></div>
            </div>

            <div className="technologies">
              <div className="skills-container">
                <div className="primary">
                  <h3>Tecnologías principales</h3>

                  <div className="grid-skills responsive-flex-column">
                    {TechnologiesP.map((tech, i) => (
                      <div className="skill responsive-flex-column" key={i}>
                        <img src={tech.logo} alt={tech.alt} />
                        <p>{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="secondary">
                  <h3>Tecnologías adicionales</h3>

                  <div className="grid-skills responsive-flex-column">
                    {TechnologiesS.map((tech, i) => (
                      <div className="skill responsive-flex-column" key={i}>
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
