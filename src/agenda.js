import './App.css';
import { Link } from "react-router-dom";

function agenda() {
    return (

        <div className="container-fluid" style={{ height: "100%" }}>
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
                                    <table className="table table-bordered" >
                                        <thead className="table-dark" >
                                            <tr>
                                                <th>Id</th>
                                                <th>Fecha</th>
                                                <th>Hora</th>
                                                <th>Servicio</th>
                                                <th>Usuario agendado</th>


                                            </tr>
                                        </thead>
                                        <tbody className="table-dark  table-hover ">
                                            <tr>
                                                <td>1</td>
                                                <td>28/11/2021</td>
                                                <td>08:00-0845</td>
                                                <td> mascarillas </td>
                                                <td> Kelly32 </td>
                                            </tr>

                                            <tr>
                                                <td>2</td>
                                                <td>28/11/2021</td>
                                                <td>09:00-09:45</td>
                                                <td> cortes </td>
                                                <td> Javiercapo12 </td>
                                            </tr>


                                            <tr>
                                                <td>3</td>
                                                <td>28/11/2021</td>
                                                <td>10:00-10:45</td>
                                                <td> cortes </td>
                                                <td> Tania240 </td>
                                            </tr>


                                            <tr>
                                                <td>4</td>
                                                <td>29/11/2021</td>
                                                <td>11:00-11:45</td>
                                                <td> cortes </td>
                                                <td> Maria_012 </td>
                                            </tr>


                                            <tr>
                                                <td>5</td>
                                                <td>29/11/2021</td>
                                                <td>02:00-02:45</td>
                                                <td>  cortes </td>
                                                <td> Santiagoss12 </td>
                                            </tr>

                                            <tr>
                                                <td>6</td>
                                                <td>29/11/2021</td>
                                                <td>03:00-03:45</td>
                                                <td> mascarillas </td>
                                                <td> andresfelipe12 </td>
                                            </tr>


                                            <tr>
                                                <td>7</td>
                                                <td>31/11/2021</td>
                                                <td>04:00-04:45</td>
                                                <td> Diseño de uñas </td>
                                                <td> andreaval12 </td>
                                            </tr>

                                        </tbody>
                                    </table>
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

export default agenda;
