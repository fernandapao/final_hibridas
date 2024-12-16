import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FuncionesList from '../components/Funciones/FuncionesList';
import NovedadesList from '../components/Novedades/NovedadesList';
import FuncionForm from '../components/Funciones/FuncionForm';
import NovedadForm from '../components/Novedades/NovedadForm';

function Dashboard() {
  return (
    <div>
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
    </div>
  );
}

export default Dashboard;
