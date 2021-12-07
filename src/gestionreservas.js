import './App.css';
import { Link} from "react-router-dom";

function reservas() {
  return (
    
    <div className="container-fluid" style={{height:"750px"}}>
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
                
                </nav>  <h4>Gestion de reservas</h4>

    <div className="card o-hidden border-0 shadow-lg mt-3  ">
        <div className="card-body p-0">
            {/* <!-- Nested Row within Card Body --> */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="p-12">
                    <div className="card shadow mb-10">
                    <table className="table table-bordered">
                        <thead className="table-dark" >
                            <tr>
                            <th>usuario</th>
                            <th>servicio</th>
                            <th>fecha</th>
                            <th>hora</th>
                            

                            </tr>
                        </thead>
                        <tbody className="table-dark  table-hover ">
                            <tr>
                            <td> Kelly32</td>
                            <td>mascarillas</td>
                            <td> 28/11/2021 </td>
                            <td> 08:00-08:45 </td>
                          
                            </tr>

                            <tr>
                            <td>Javiercapo12</td>
                            <td>cortes</td>
                            <td> 28/11/2021 </td>
                            <td> 09:00-09:45 </td>
                            
                            </tr>


                            <tr>
                            <td>Tania240</td>
                            <td>cortes </td>
                            <td> 28/11/2021 </td>
                            <td> 10:00-10:45 </td>
                            
                            </tr>


                            <tr>
                            <td>Maria_012</td>
                            <td>cortes</td>
                            <td> 29/11/2021 </td>
                            <td> 11:00-11:45 </td>
                            
                            </tr>


                            <tr>
                            <td>Santiagoss12</td>
                            <td>cortes</td>
                            <td>  29/11/2021 </td>
                            <td> 02:00-02-45 </td>
                            
                            </tr>

                            <tr>
                            <td>andresfelipe12</td>
                            <td>mascarillas</td>
                            <td> 29/11/2021 </td>
                            <td> 03:00-03:45  </td>
                           
                            </tr>


                            <tr>
                            <td>andreaval12</td>
                            <td>Diseño de uñas</td>
                            <td> 31/11/2021 </td>
                            <td> 04:00-04:45 </td>
                            </tr>



                            
                            
                        </tbody>

                    </table>
                    <button id="miBoton" > Cancelar Reserva </button>
                        



                    
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
            </footer>   </div>



  );
}

export default reservas;
