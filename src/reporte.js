import './App.css';
import { Link } from "react-router-dom";
import React from 'react';
import TableReporte from './components/tableReporte';
function Reporte() {
    const [dataApi,setDataApi] = React.useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:3004/reporte1")
        .then(response => response.json())
        .then(data => setDataApi(data));
    },[])
    return (

        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">

                <nav className="navbar navbar-expand navbar-dark bg-gradient-warning topbar mb-4 static-top shadow px-5 mb-5">
                    <a className="navbar-brand" href="/#">
                        <img src="/img/salon.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                        PeluqueriaUnisex
                    </a>
                    <ul className="navbar-nav ml-auto ">

                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/ingresar" className="nav-link">
                                Ingresar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registro" className="nav-link">
                                Registrarse
                            </Link>
                        </li>

                    </ul>

                </nav>
                <div class="container">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h4 class="m-0 font-weight-bold text-primary text-center">Reportes</h4>
                        </div>
                        <div className="m-5">
                            <form className="user">
                            <div className="form-group row text-center">
                                    <div className="col-12 text-center">
                                        <button type="button" class="btn btn-info">Espacios disponibles en la agenda dado día y servicio</button>
                                    </div>
                                </div>
                                <div className="form-group row text-center ">
                                    <div className="col-6 text-center">
                                        <button type="button" class="btn btn-info">Usuarios atendidos por día</button>
                                    </div>
                                    <div className="col-6 text-center">
                                        <button type="button" class="btn btn-info">Ingresos por día y por servicio.</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                        <div className="p-5">
                            <TableReporte data={dataApi} />
                        </div>
                    </div>

                </div>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2020</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
        
    );
}

export default Reporte;
