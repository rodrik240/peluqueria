import './App.css';
import { Link } from "react-router-dom";

function Servicios() {
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



                <div className="container" style={{ height: "100%" }} >



                    <div className="card o-hidden border-0 shadow-lg mb-5 p-5">
                        <h2 className="text-center mb-5">Nuestros Servicios!</h2>
                        <div class="card-deck">
                            <div class="card">
                                <img src="img/servicio1.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Servicio 1</h5>
                                    <p class="card-text"> Descripcion:se va a planchar el pelo hasta una temperatura optima para dejarlo liso y firme</p>
                                    <p class="card-text"> Costo: 12.000 </p>
                                    <p class="card-text"> Duracion: 45 minutos </p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/servicio" className="nav-link text-center">
                                        Agendar!
                                    </Link>
                                </div>
                            </div>
                            <div class="card">
                                <img src="img/servicio2.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Servicio 2</h5>
                                     <p class="card-text"> Descripcion:Se aplica una Mascarilla que se encarga de nutrir y rejuvenecer la piel dejandola suave y libre de imperfecciones</p>
                                     <p class="card-text"> Costo: 15.000 </p>
                                     <p class="card-text"> Duracion: 60 minutos </p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/servicio" className="nav-link text-center">
                                        Agendar!
                                    </Link>
                                </div>
                            </div>
                            <div class="card">
                                <img src="img/servicio3.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Servicio 3</h5>
                                     <p class="card-text"> Descripcion: Se aplica un esmalte de uñas y se le aplica un diseño que la cliente desee</p>
                                     <p class="card-text"> Costo: 13.000 </p>
                                     <p class="card-text"> Duracion: 45 minutos </p>
                                </div>
                                <div class="card-footer">
                                    <Link to="/servicio" className="nav-link text-center">
                                        Agendar!
                                    </Link>
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
        </div>


    );
}

export default Servicios;
