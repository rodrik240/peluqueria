import React from 'react'

const Login = () => {

    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">

                <div className="container mt-5" style={{ height: "100%" }} >


                    <div className="card o-hidden border-0 shadow-lg mb-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}

                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block ">
                                    <img className="rounded img-fluid p-5" src="img/ingreso.jpg" style={{ height: "100%" }} alt="..." />
                                </div>
                                <div className="col-lg-6 my-auto">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Bienvenido de vuelta!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Ingrese su usuario" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Contraseña" />
                                            </div>
                                            <a href="index.html" className="btn btn-primary btn-user btn-block">
                                                Ingresar
                                            </a>
                                            <hr />
                                        </form>

                                        <div className="text-center">
                                            <a className="small" href="/registro">Crear una cuenta!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}
export default Login;
