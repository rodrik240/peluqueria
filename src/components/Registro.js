import React, { useState, SyntheticEvent} from 'react'

const Registro = () => {
    const [nombre, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const submit = async (e = SyntheticEvent) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/register',{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                nombre,
                apellido,
                email,
                usuario,
                contrasena,
                confirmar
            }) 
        });
        const content = await response.json();
        console.log(content) 
    }
    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container mt-5" style={{ height: "100%" }}>
                    <div className="card o-hidden border-0 shadow-lg mb-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block ">
                                    <img className="rounded img-fluid p-5" src="img/registro.jpg" style={{ height: "100%" }} alt="..." />
                                </div>
                                <div className="col-lg-7 my-auto">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Crea una cuenta!</h1>
                                        </div>
                                        <form onSubmit={submit}>
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" placeholder="Nombre" required
                                                        onChange={e => setName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-user" placeholder="Apellido" required
                                                        onChange={e => setApellido(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" placeholder="Correo" required
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user" placeholder="Usuario" required
                                                    onChange={e => setUsuario(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="password" className="form-control form-control-user" placeholder="Contraseña" required
                                                        onChange={e => setContrasena(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="password" className="form-control form-control-user" placeholder="Confirmar contraseña" required
                                                        onChange={e => setConfirmar(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <button className="btn btn-primary btn-user btn-block" type='submit'> 
                                                Registrar
                                            </button>
                                            <hr />

                                        </form>
                                        <div className="text-center">
                                            <a className="small" href="login.html">Ya tiene una cuenta? Ingrese!</a>
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


export default Registro;