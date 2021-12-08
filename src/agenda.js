import './App.css';
import { Link } from "react-router-dom";
import React from 'react';
import TableAgenda from './components/tableAgenda';

function Agenda() {
    const [dataApi,setDataApi] = React.useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:3004/agenda")
        .then(response => response.json())
        .then(data => setDataApi(data));
    },[])
    return (

        <div className="container-fluid" style={{ height: "100%" }}>
            <nav className="navbar navbar-expand navbar-dark bg-gradient-warning topbar mb-4 static-top shadow px-5">
                <a className="navbar-brand" href="/inicio">
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
                        <a className="nav-link" href="/#">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Ingresar
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            Registrarse
                        </Link>
                    </li>

                </ul>

            </nav>

            <div className="card o-hidden border-0 shadow-lg ">
                <h4 className="text-center mt-4">Agenda</h4>
                <div className="card-body ">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <div className="card shadow">
                                    <div className="agenda">
                                        <TableAgenda data={dataApi} />
                                    </div>
                                </div>
                            </div>
                        </div>
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



    );
}

export default Agenda;
