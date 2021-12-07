import './App.css';
import { Link} from "react-router-dom";


function Inicio() {
  return (
    <div id="wrapper">
        {/* <!-- Page Wrapper --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper">

            {/* <!-- Main Content --> */}
            <div id="content ">

                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-dark bg-gradient-warning topbar static-top shadow px-5">
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
                <div className="d-block ">
                    <div style={{height:"530px",overflow:"hidden",position:"relative"}}>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="3000" >
                            <img src="img/carrucel3.jpg" style={{height:"1000px",width:"100%"}} alt="..." />
                            </div>
                            <div class="carousel-item" data-interval="3000">
                            <img src="img/carrucel1.jpg" style={{height:"1000px",width:"100%"}}  alt="..." />
                            </div>
                            <div class="carousel-item" data-interval="3000">
                            <img src="img/carrucel2.jpg" style={{height:"1000px",width:"100%"}}  alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="h-45 m-5">
                <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-12 my-auto">
                            <img className="rounded img-fluid" src="img/team.jpg" style={{width:"350px"}} alt="..." />
                        </div>
                        <div class="col-4">
                            <h3>Nuestro Equipo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum pellentesque risus vitae maximus. Phasellus consectetur mi nec urna finibus elementum. Ut eros turpis, iaculis in vestibulum vel, ornare ac nunc. Maecenas lectus risus, tincidunt lobortis egestas eu, fringilla sit amet purus. Donec non elementum dolor. Quisque consequat risus at bibendum consequat. Sed risus sem, congue vitae risus sed, mattis ultricies mi. Integer blandit fermentum sollicitudin. Morbi elementum felis mauris, commodo malesuada ante ultrices sed. Nunc dapibus quis purus vel scelerisque. Duis ut risus nunc. Suspendisse potenti. Cras sit amet diam tortor. Nullam eget felis congue, feugiat ex quis, dictum nisi.</p>
                        </div>
                    </div>
                        
                    
                    
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