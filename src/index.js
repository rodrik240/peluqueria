import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registro from './Registro';
import Inicio from './Inicio'
import Servicios from './Servicios'
import Agenda from './agenda'
import Gestionreservas from './gestionreservas'
import Reporte from './reporte'
import CrearUsuarios from './crearUsuarios'
import Servicio from './Servicio'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/ingresar" element={<Login />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicio" element={<Servicio/>} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/gestionReservas" element={<Gestionreservas />} />
        <Route path="/reporte" element={<Reporte />} />
        <Route path="/crearUsuarios" element={<CrearUsuarios/>} />
      </Routes>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
