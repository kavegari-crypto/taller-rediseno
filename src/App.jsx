import './App.css'

function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">

            <a className="navbar-brand fw-bold" href="#">
              Mi Viaje
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

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <a className="nav-link" href="#inicio">
                    Inicio
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#productos">
                    Productos
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contacto">
                    Contacto
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="container text-center">

          <h1 className="display-3 fw-bold">
            Bienvenido a nuestra tienda
          </h1>

          <p className="lead">
            Encuentra los mejores viajes al mejor precio.
          </p>

          <a
            href="#productos"
            className="btn btn-primary btn-lg"
          >
            Ver aventuras
          </a>

        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-5">
        <div className="container">

          <h2 className="text-center mb-5">
            Nuestras aventuras
          </h2>

          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">

                <img
                  src="https://picsum.photos/500/300?random=1"
                  className="card-img-top"
                  alt="Producto 1"
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">
                    Viaje Urbano
                  </h5>

                  <p className="card-text">
                    Te llevamos a cualquer destino urbano que imagines y te garantizamos la comodidad y aventura.
                  </p>

                  <p className="fw-bold fs-5">
                    $500.000
                  </p>

                  <button className="btn btn-primary mt-auto">
                    Comprar
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
                  alt="Producto 2"
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">
                    Viaje de Playa
                  </h5>

                  <p className="card-text">
                    Te ofracemos una escapada vacacional con mucho sol y arena a tu disposicion, garantizando la relajacion y la aventura.
                  </p>

                  <p className="fw-bold fs-5">
                    $750.000
                  </p>

                  <button className="btn btn-primary mt-auto">
                    Comprar
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
                  alt="Producto 3"
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">
                    Viaje Montaña
                  </h5>

                  <p className="card-text">
                    Te llevamos a sentir la experiencia de ermitaño en una montaña donde nada te estresara, te garantizamos el silencio y la desconeccion de la rutina.
                  </p>

                  <p className="fw-bold fs-5">
                    $1.000.000
                  </p>

                  <button className="btn btn-primary mt-auto">
                    Comprar
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contacto"
        className="bg-dark text-white py-4"
      >
        <div className="container">

          <div className="row">

            {/* INFORMACIÓN */}
            <div className="col-md-6 mb-3">
              <h5>Mi Viaje</h5>

              <p className="mb-0">
                Encuentra viajes de calidad al mejor precio.
              </p>
            </div>

            {/* ENLACES */}
            <div className="col-md-6 mb-3">
              <h5>Enlaces</h5>

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
                    Productos
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
            © 2026 Mi Viaje. Todos los derechos reservados.
          </p>

        </div>
      </footer>
    </>
  )
}

export default App
