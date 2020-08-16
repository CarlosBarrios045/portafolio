import React, { Fragment } from "react";

// Material UI
import { Button } from "@material-ui/core";

const Projects = () => {
  const projects = [
    {
      name: "Bibliostore",
      description:
        "Es una aplicación la cual trata de una biblioteca hecha con React, Redux y Firebase. En ella puedes crear, editar y eliminar suscriptores los cuales son los solicitantes a libros, como también puedes crear, editar y eliminar libros.",
      login: {
        email: "correo@correo.com",
        password: "123123",
      },
      links: {
        github: "https://github.com/CarlosBarrios045/bibliostore",
        demo: "https://bibliostore-react.netlify.com/",
      },
    },
    {
      name: "Mini CRM",
      description:
        "Es una aplicación donde puedes crear, editar o eliminar clientes, así mismo productos y poder llevar un control de tus pedidos. Fue hecho con React, Node, Express y Mongo (MERN).",
      login: {
        email: "correo@correo.com",
        password: "123",
      },
      links: {
        github: "https://github.com/CarlosBarrios045/crm-mern",
        demo: "https://crm-mern.netlify.com/",
      },
    },
    {
      name: "Buscador de Letras de Canciones",
      description:
        "Está aplicación te ayuda a buscar las letras de tus canciones favoritas, y adeamás te muestra una pequeña biografía del autor de la canción. Fue hecho con React, consumiendo la API de Lyrics.",
      links: {
        github: "https://github.com/CarlosBarrios045/musica-react",
        demo: "https://trusting-almeida-1e3972.netlify.com/",
      },
    },
    {
      name: "Criptomonedas",
      description:
        "Es un cotizador de Criptomonedas, donde escoges la moneda de tu país (o la que desees), seleccionas la criptomoneda a cotizar y luego tendrás tu cotización. Fue hecho con React Hooks, y la API de Cripto Compare.",
      links: {
        github: "https://github.com/CarlosBarrios045/Criptomonedas",
        demo: "https://cripto-react.netlify.com/",
      },
    },
    {
      name: "Juego de Memoria",
      description: "Es el tradicional juego de memorias hecho con React-Hooks.",
      links: {
        github: "https://github.com/CarlosBarrios045/memorias-react",
        demo: "https://memorias-react.netlify.com/",
      },
    },
    {
      name: "Buscador de Eventos",
      description:
        "Es un buscador de eventos, puedes buscar por categoría y/o el nombre de eventos que desees buscar. Fue hecho con React y la API de EventBrite.",
      links: {
        github: "https://github.com/CarlosBarrios045/react-eventos",
        demo: "https://serene-bardeen-0f05d1.netlify.com/",
      },
    },
    {
      name: "Buscador de imagenes",
      description:
        "Es un buscador de imagenes hecho con React y la API de Pixabay.",
      links: {
        github: "https://github.com/CarlosBarrios045/react-pixabay",
        demo: "https://buscarimg-react.netlify.com/",
      },
    },
  ];

  return (
    <Fragment>
      <header className="hero2" id="start">
        <div className="header-content">
          <div className="info-profile">
            <h1>Mis Proyectos</h1>
            <p className="italic">¿Buscas Front End Developer?</p>
          </div>
        </div>
      </header>

      <main>
        <div className="projects container">
          <div className="title">
            <h2>Proyectos</h2>
            <div className="barra"></div>
          </div>

          <div className="d-flex" style={{ marginTop: "1.5rem" }}>
            {projects.map(({ name, description, login, links }, i) => (
              <div className="card responsive-flex-column" key={i}>
                <div className="card-image"></div>

                <div className="card-body">
                  <div className="title">
                    <h2>{name}</h2>
                    <div className="barra"></div>
                  </div>

                  <p>{description}</p>

                  {login && (
                    <div className="login-projects">
                      <p className="bold">Para ingresar:</p>
                      <p>Email: {login.email}</p>
                      <p>Password: {login.password}</p>
                    </div>
                  )}

                  <nav>
                    <Button
                      variant="contained"
                      href={links.github}
                      target="_blank"
                    >
                      Github
                    </Button>
                    <Button
                      variant="contained"
                      href={links.demo}
                      target="_blank"
                    >
                      Demo
                    </Button>
                  </nav>
                </div>
              </div>
            ))}
            {/* card */}
          </div>
          {/* d-flex */}
        </div>
        {/* projects */}
      </main>
    </Fragment>
  );
};

export default Projects;
