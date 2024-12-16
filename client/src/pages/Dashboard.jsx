import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FuncionesList from '../components/Funciones/FuncionesList';
import NovedadesList from '../components/Novedades/NovedadesList';
import FuncionForm from '../components/Funciones/FuncionForm';
import NovedadForm from '../components/Novedades/NovedadForm';

function Dashboard() {
  return (
    <div className="dashboard-body">
      <div className="dashboard-section">
        <h1 className="titulo-dashboard mb-3">
          <span>Panel de Administrador</span>
        </h1>
        <div className="linea-amarilla"></div>
      </div>

      <div className="dashboard-menu">
        <ul>
          <li><Link to="funciones">Funciones</Link></li>
          <li><Link to="novedades">Novedades</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="funciones" element={<FuncionesList />} />
        <Route path="funciones/nueva" element={<FuncionForm />} />
        <Route path="funciones/editar/:id" element={<FuncionForm />} /> 
        <Route path="novedades" element={<NovedadesList />} />
        <Route path="novedades/nueva" element={<NovedadForm />} />
        <Route path="novedades/editar/:id" element={<NovedadForm />} />
      
      </Routes>

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
          </div>
        </div>

        <div className="footer-bottom text-center py-2">
          <p className="derechos text-light">&copy; 2024 AeroAsist | Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
