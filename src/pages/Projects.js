import React, { Fragment } from "react";

const Projects = () => {
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

          <div className="d-flex">
            <div className="card responsive-flex-column">
              <div className="card-image"></div>

              <div className="card-body">
                <div className="title">
                  <h2>Bibliostore</h2>
                  <div className="barra"></div>
                </div>

                <p>
                  Es una aplicación la cual trata de una biblioteca hecha con
                  React, Redux y Firebase. En ella puedes crear, editar y
                  eliminar suscriptores los cuales son los solicitantes a
                  libros, como también puedes crear, editar y eliminar libros.
                </p>

                <div className="login-projects">
                  <p className="bold">Para ingresar:</p>
                  <p>Email: correo@correo.com</p>
                  <p>Password: 123123</p>
                </div>

                <nav>
                  <a
                    href="https://github.com/CarlosBarrios045/bibliostore"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://bibliostore-react.netlify.com/"
                    target="_blank"
                  >
                    Demo
                  </a>
                </nav>
              </div>
            </div>
            {/* card-1 */}

            <div className="card responsive-flex-column">
              <div className="card-image"></div>

              <div className="card-body">
                <div className="title">
                  <h2>Mini CRM</h2>
                  <div className="barra"></div>
                </div>

                <p>
                  Es una aplicación donde puedes crear, editar o eliminar
                  clientes, así mismo productos y poder llevar un control de tus
                  pedidos. Fue hecho con React, Node, Express y Mongo (MERN).
                </p>

                <div className="login-projects">
                  <p className="bold">Para ingresar:</p>
                  <p>Email: correo@correo.com</p>
                  <p>Password: 123</p>
                </div>

                <nav>
                  <a
                    href="https://github.com/CarlosBarrios045/crm-mern"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a href="https://crm-mern.netlify.com/" target="_blank">
                    Demo
                  </a>
                </nav>
              </div>
            </div>
            {/* card-2 */}

            <div className="card responsive-flex-column">
              <div className="card-image"></div>

              <div className="card-body">
                <div className="title">
                  <h2>Buscador de Letras de Canciones</h2>
                  <div className="barra"></div>
                </div>

                <p>
                  Está aplicación te ayuda a buscar las letras de tus canciones
                  favoritas, y adeamás te muestra una pequeña biografía del
                  autor de la canción. Fue hecho con React, consumiendo la API
                  de Lyrics.
                </p>

                <nav>
                  <a
                    href="https://github.com/CarlosBarrios045/musica-react"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://trusting-almeida-1e3972.netlify.com/"
                    target="_blank"
                  >
                    Demo
                  </a>
                </nav>
              </div>
            </div>
            {/* card-3 */}

            <div className="card responsive-flex-column">
              <div className="card-image"></div>

              <div className="card-body">
                <div className="title">
                  <h2>Criptomonedas</h2>
                  <div className="barra"></div>
                </div>

                <p>
                  Es un cotizador de Criptomonedas, donde escoges la moneda de
                  tu país (o la que desees), seleccionas la criptomoneda a
                  cotizar y luego tendrás tu cotización. Fue hecho con React
                  Hooks, y la API de Cripto Compare.
                </p>

                <nav>
                  <a
                    href="https://github.com/CarlosBarrios045/Criptomonedas"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a href="https://cripto-react.netlify.com/" target="_blank">
                    Demo
                  </a>
                </nav>
              </div>
            </div>
            {/* card-4 */}

            <div className="card responsive-flex-column">
              <div className="card-image"></div>

              <div className="card-body">
                <div className="title">
                  <h2>Juego de Memoria</h2>
                  <div className="barra"></div>
                </div>

                <p>
                  Es el tradicional juego de memorias hecho con React-Hooks.
                </p>

                <nav>
                  <a
                    href="https://github.com/CarlosBarrios045/memorias-react"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a href="https://memorias-react.netlify.com/" target="_blank">
                    Demo
                  </a>
                </nav>
              </div>
            </div>
            {/* card-5 */}

            <div className="card responsive-flex-column">
              <div className="card-image"></div>

              <div className="card-body">
                <div className="title">
                  <h2>Buscador de Eventos</h2>
                  <div className="barra"></div>
                </div>

                <p>
                  Es un buscador de eventos, puedes buscar por categoría y/o el
                  nombre de eventos que desees buscar. Fue hecho con React y la
                  API de EventBrite.
                </p>

                <nav>
                  <a
                    href="https://github.com/CarlosBarrios045/react-eventos"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://serene-bardeen-0f05d1.netlify.com/"
                    target="_blank"
                  >
                    Demo
                  </a>
                </nav>
              </div>
            </div>
            {/* card-6 */}

            <div className="card responsive-flex-column">
              <div className="card-image"></div>

              <div className="card-body">
                <div className="title">
                  <h2>Buscador de imagenes</h2>
                  <div className="barra"></div>
                </div>

                <p>
                  Es un buscador de imagenes hecho con React y la API de
                  Pixabay.
                </p>

                <nav>
                  <a
                    href="https://github.com/CarlosBarrios045/react-pixabay"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a href="https://buscarimg-react.netlify.com/">Demo</a>
                </nav>
              </div>
            </div>
            {/* card-7 */}
          </div>
          {/* d-flex */}
        </div>
        {/* projects */}
      </main>
    </Fragment>
  );
};

export default Projects;
