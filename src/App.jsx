import './App.css'
import heroImage from './assets/hero.png'

function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">

            <a className="navbar-brand fw-bold" href="#">
              Mi Agencia de Viajes
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#inicio"
                  >
                    Inicio
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#productos"
                  >
                    Destinos
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contacto"
                  >
                    Contacto
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url(${heroImage})
          `,
        }}
      >
        <div className="container text-center text-white">

          <h1 className="display-3 fw-bold">
            Descubre nuevos destinos
          </h1>

          <p className="lead">
            Vive experiencias inolvidables y descubre
            lugares increíbles alrededor del mundo.
          </p>

          <a
            href="#productos"
            className="btn btn-primary btn-lg"
          >
            Explorar destinos
          </a>

        </div>
      </section>

      {/* DESTINOS */}
      <section
        id="productos"
        className="py-5"
      >
        <div className="container">

          <h2 className="text-center mb-5">
            Destinos destacados
          </h2>

          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">

                <img
                  src="https://picsum.photos/500/300?random=1"
                  className="card-img-top"
                  alt="Cartagena"
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">
                    Cartagena
                  </h5>

                  <p className="card-text">
                    Disfruta de las playas, la arquitectura
                    colonial y la cultura del Caribe colombiano.
                  </p>

                  <p className="fw-bold fs-5">
                    Desde $500.000
                  </p>

                  <button className="btn btn-primary mt-auto">
                    Ver destino
                  </button>

                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">

                <img
                  src="https://picsum.photos/500/300?random=2"
                  className="card-img-top"
                  alt="Santorini"
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">
                    Santorini
                  </h5>

                  <p className="card-text">
                    Descubre los paisajes, playas y
                    atardeceres de esta increíble isla griega.
                  </p>

                  <p className="fw-bold fs-5">
                    Desde $2.500.000
                  </p>

                  <button className="btn btn-primary mt-auto">
                    Ver destino
                  </button>

                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">

                <img
                  src="https://picsum.photos/500/300?random=3"
                  className="card-img-top"
                  alt="París"
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">
                    París
                  </h5>

                  <p className="card-text">
                    Conoce la Torre Eiffel, sus museos,
                    calles históricas y gastronomía.
                  </p>

                  <p className="fw-bold fs-5">
                    Desde $3.000.000
                  </p>

                  <button className="btn btn-primary mt-auto">
                    Ver destino
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section
        id="contacto"
        className="py-5 bg-light"
      >
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-12 col-md-8 col-lg-6">

              <h2 className="text-center mb-4">
                Contáctanos
              </h2>

              <p className="text-center text-muted mb-4">
                ¿Tienes alguna pregunta sobre nuestros
                destinos? Escríbenos y te ayudaremos.
              </p>

              <form>

                {/* NOMBRE */}
                <div className="mb-3">

                  <label
                    htmlFor="nombre"
                    className="form-label"
                  >
                    Nombre
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingresa tu nombre"
                  />

                </div>

                {/* CORREO */}
                <div className="mb-3">

                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nombre@ejemplo.com"
                  />

                </div>

                {/* DESTINO */}
                <div className="mb-3">

                  <label
                    htmlFor="destino"
                    className="form-label"
                  >
                    Destino de interés
                  </label>

                  <select
                    className="form-select"
                    id="destino"
                  >
                    <option value="">
                      Selecciona un destino
                    </option>

                    <option value="cartagena">
                      Cartagena
                    </option>

                    <option value="santorini">
                      Santorini
                    </option>

                    <option value="paris">
                      París
                    </option>
                  </select>

                </div>

                {/* MENSAJE */}
                <div className="mb-3">

                  <label
                    htmlFor="mensaje"
                    className="form-label"
                  >
                    Mensaje
                  </label>

                  <textarea
                    className="form-control"
                    id="mensaje"
                    rows="4"
                    placeholder="Cuéntanos qué viaje estás buscando..."
                  ></textarea>

                </div>

                {/* BOTÓN */}
                <div className="d-grid">

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Enviar consulta
                  </button>

                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="bg-dark text-white py-4"
      >
        <div className="container">

          <div className="row">

            {/* INFORMACIÓN */}
            <div className="col-md-6 mb-3">

              <h5>
                Mi Agencia de Viajes
              </h5>

              <p className="mb-0">
                Descubre nuevos lugares y vive
                experiencias inolvidables.
              </p>

            </div>

            {/* ENLACES */}
            <div className="col-md-6 mb-3">

              <h5>
                Enlaces
              </h5>

              <ul className="list-unstyled">

                <li>
                  <a
                    href="#inicio"
                    className="text-white text-decoration-none"
                  >
                    Inicio
                  </a>
                </li>

                <li>
                  <a
                    href="#productos"
                    className="text-white text-decoration-none"
                  >
                    Destinos
                  </a>
                </li>

                <li>
                  <a
                    href="#contacto"
                    className="text-white text-decoration-none"
                  >
                    Contacto
                  </a>
                </li>

              </ul>

            </div>

          </div>

          <hr />

          <p className="text-center mb-0">
            © 2026 Mi Agencia de Viajes.
            Todos los derechos reservados.
          </p>

        </div>
      </footer>
    </>
  )
}

export default App
