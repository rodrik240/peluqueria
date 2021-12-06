import './App.css';
import { Link} from "react-router-dom";


function Inicio() {
  return (
    <div id="wrapper">
        {/* <!-- Page Wrapper --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content ">

                {/* <!-- Topbar --> */}
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
            </div>
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid" style={{height:"750px"}}>

                    {/* <!-- Page Heading --> */}
                    <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                </div>
                {/* <!-- /.container-fluid --> */}

            
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}
    </div>
  );
}

export default Inicio;