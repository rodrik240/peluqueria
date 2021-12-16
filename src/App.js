import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registro from './components/Registro';
import Inicio from './components/Inicio'
import Servicios from './components/Servicios'
import Agenda from './components/agenda'
import Gestionreservas from './components/gestionreservas'
import Reporte from './components/reporte'
import Servicio from './components/Servicio'
import Admin from './components/admin'
import Nav from './components/Nav';
import Footer from './components/Footer';

import './App.css';

function App() {
    return (
        
        <Router>
          <Nav />
          <Routes>
            <Route path="/ingresar" element={<Login />} />
            <Route exact path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicio" element={<Servicio/>} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/gestionReservas" element={<Gestionreservas />} />
            <Route path="/reporte" element={<Reporte />} />
          </Routes>
          <Footer />
        </Router>

    );
  }
  
  export default App;
  
