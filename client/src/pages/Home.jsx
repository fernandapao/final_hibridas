// src/pages/Home.jsx
import React from 'react';
import '../styles/main.css';

function Home() {
  return (
    <div className="home-container">
      <div>
        <h1 className="titulo">AeroAsist</h1>

        <div className="container d-flex justify-content-center my-4">
          <div className="row g-0">
            <div className="col-md-6 text-center">
              <img
                src="img/aero-asist-01.png"
                alt="Logo AeroAsist"
                className="img-fluid logo-image mb-3"
              />
              <h2 className="frase text-center">¡Tu aventura comienza aquí!</h2>
              <img
                src="img/ilustracion-home.png"
                alt="Imagen ilustración"
                className="img-fluid illustration-image"
              />
            </div>

            <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
              <img
                src="img/mock-up.png"
                alt="Mockup de la app"
                className="img-fluid mockup-image"
              />
            </div>
          </div>
        </div>

        <div className="franja-texto">
          <div className="container mb-5">
            <p className="texto">
              ¡Descubrí la forma más fácil de moverte en el aeropuerto con nuestra nueva app!
            </p>
            <p className="fs-5">
              Con solo ingresar tu número de vuelo, podrás buscar rápidamente lugares dentro del
              aeropuerto, desde restaurantes hasta tiendas. Además, si necesitas asistencia, ¡Podes
              solicitarla al instante! No te pierdas de nada en tu próximo viaje. Descárgala ahora
              en Android y simplifica tu experiencia de viaje. ¡Tu aventura comienza acá! ✈️📱
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer">
          <div className="row py-4">
            <div className="col-md-6 text-start mb-3">
              <a className="navbar-brand d-flex align-items-center">
                <img
                  src="img/aero-asist-03.png"
                  alt="Logo AeroAsist"
                  className="logo-nav me-2"
                  style={{ width: "200px" }}
                />
              </a>
              <p className="mb-1 text-light">Bustos Cintia</p>
              <p className="text-light">Paoliello Fernanda</p>
            </div>

            <div className="col-md-6 text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11709.37285550425!2d-58.43014776618629!3d-34.5578179786092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5a7f531c7b5%3A0xfdd992892f9ccadb!2sAeroparque%20Internacional%20Jorge%20Newbery!5e0!3m2!1ses!2sar!4v1730944419807!5m2!1ses!2sar"
                width="100%"
                height="150"
                style={{ border: "0", borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center py-2">
          <p className="derechos text-light">&copy; 2024 AeroAsist | Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
