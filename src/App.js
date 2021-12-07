import './App.css';
import { Link } from "react-router-dom";


function App() {
    return (


        <div id="wrapper">
            {/*<!-- Page Wrapper -->*/}
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}

                <Link to="/dashboard" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin<sup>2</sup></div>
                </Link>

                {/*<!-- Divider -->*/}

            
               
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">
                    Gestión
                </div>

                {/*<!-- Nav Item - Pages Collapse Menu -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Paginas</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Clientes</h6>
                            <a className="collapse-item" href="/">Inicio</a>
                            <a className="collapse-item" href="/ingreso">Ingreso</a>
                            <a className="collapse-item" href="/registro">Registro</a>
                            <a className="collapse-item" href="/servicios">ListaServicios</a>
                            <a className="collapse-item" href="/servicio">Servicio</a>
                            <a className="collapse-item" href="/agenda">Agenda</a>
                            <a className="collapse-item" href="/gestionReservas">GestionReservas</a>
                        </div>
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Empleados</h6>
                            <a className="collapse-item" href="/agenda">Agenda</a>
                        </div>
                    </div>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                

    

               

            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">

                {/*<!-- Main Content -->*/}
                <div id="content">

                    {/*<!-- Topbar -->*/}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        {/*<!-- Sidebar Toggle (Topbar) -->*/}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>

                        

                        {/*<!-- Topbar Navbar -->*/}
                        <ul className="navbar-nav ml-auto">

                            {/*<!-- Nav Item - Search Dropdown (Visible Only XS) -->*/}
                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"></i>
                                </a>
                                {/*<!-- Dropdown - Messages -->*/}
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            

                            {/*<!-- Nav Item - User Information -->*/}
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                    <img className="img-profile rounded-circle"
                                        src="img/undraw_profile.svg" />
                                </a>
                                {/*<!-- Dropdown - User Information -->*/}
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>

                        </ul>

                    </nav>
                    {/*<!-- End of Topbar -->*/}

                    {/*<!-- Begin Page Content -->*/}
                    <div className="container-fluid">

                       
                    </div>
                    {/*<!-- /.container-fluid -->*/}

                </div>
                {/*<!-- End of Main Content -->*/}

                {/*<!-- Footer -->*/}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
                {/*<!-- End of Footer -->*/}

            </div>
            {/*<!-- End of Content Wrapper -->*/}
            {/*<!-- End of Page Wrapper -->*/}
        </div>
    );
}


export default App;