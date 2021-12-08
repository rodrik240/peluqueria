import './App.css';
import { Link } from "react-router-dom";
import TableGestion from './components/tableGestion';
import React from 'react';

function Reservas() {
    
    const [dataApi,setDataApi] = React.useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:3004/gestionReserva")
        .then(response => response.json())
        .then(data => setDataApi(data));
    },[])
    return (

        <div className="container-fluid" style={{ height: "750px" }}>
            <nav className="navbar navbar-expand navbar-dark bg-gradient-warning topbar mb-4 static-top shadow px-5">
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


            <div className="card o-hidden border-0 shadow-lg m-5  ">
                <h4 className="text-center mt-4 ">Gestion de reservas</h4>
                <div className="card-body ">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-12">
                                <div className="card shadow mb-10">
                                    <TableGestion data={dataApi} />
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

export default Reservas;
