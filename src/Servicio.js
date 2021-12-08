import './App.css';
import { Link } from "react-router-dom";
import TableServicio from './components/tableServicio.js';
import React from 'react';

function Servicio() {
    

    const [dataApi,setDataApi] = React.useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:3004/servicio")
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



                <div className="container mb-5" style={{ height: "100%" }} >

                    <div class="card text-center">
                        <div class="card-header">
                            Servicio 1
                        </div>
                        <div class="card-body">
                            <div class="row justify-content-center mx-auto">
                                <div class="col-lg-4 col-md-12 my-auto pl-5">
                                    <img className="rounded img-fluid" src="img/servicio1.jpg" style={{ height: "380px" }} alt="..." />
                                </div>
                                <div class="col-lg-8 col-md-12 my-auto pl-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum pellentesque risus vitae maximus. Phasellus consectetur mi nec urna finibus elementum. Ut eros turpis, iaculis in vestibulum vel, ornare ac nunc. Maecenas lectus risus, tincidunt lobortis egestas eu, fringilla sit amet purus. Donec non elementum dolor. Quisque consequat risus at bibendum consequat. Sed risus sem, congue vitae risus sed, mattis ultricies mi. </p>
                                </div>
                                <hr   size="2" width="100%" />

                                <h3 className="text-center mb-4">Horarios</h3>
                                
                                <TableServicio data={dataApi} />  
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
        </div>


    );
}

export default Servicio;
