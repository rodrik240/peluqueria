import './App.css';
import { Link } from "react-router-dom";

function CrearUsuarios() {
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
                <div className="container" style={{ height: "780px" }}>
                    <div className="card o-hidden border-0 shadow-lg mt-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block">
                                    <img className="rounded img-fluid p-5" src="img/crearUsuario.jpg" style={{ height: "100%" }} alt="..." />
                                </div>
                                <div className="col-lg-7 my-auto">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Crear Empleado!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user" id="examplePhone"
                                                    placeholder="Nombre" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user" id="exampleUsuario"
                                                    placeholder="Servicio" />
                                            </div>
                                            <a href="/crearUsuarios" className="btn btn-primary btn-user btn-block">
                                                Crear
                                            </a>
                                            <hr />

                                        </form>
                                        
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
        </div>

    );
}

export default CrearUsuarios;