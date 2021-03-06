import './App.css';
import { Link} from "react-router-dom";

function Login() {
  return (

    
    <div className="container">
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

        <div className="row justify-content-center mt-5">

            <div className="col-xl-10 col-lg-12 col-md-9 pt-5">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}

                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                                            Login
                                        </a>
                                        <hr/>
                                    </form>

                                    <div className="text-center">
                                        <a className="small" href="register.html">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

   
  );
}

export default Login;
