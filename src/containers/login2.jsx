import React, { useState } from 'react';


const cojerlosbotones = (e) => {
    console.log("jouler", e)
}

const Login = props => {

    const [formulario, setformulario] = useState({});
    const [mensajes, setmensajes] = useState({});

    console.log(formulario)
    const validarDatosP = () => {
        if (isNaN(formulario.password) && formulario.password != '') {
            setmensajes({
                ...mensajes,
                password: "Datos incorrectos"
            })
        }
    
    }
    const validarDatosU = () => {
        if (formulario.user != 'Dany') {
            setmensajes({
                ...mensajes,
                user: "Datos incorrectos"
            })
        } else {
           window.location.replace('http://localhost:3000/ModuloDoc')
        }
    
    }
    
    return (
        <>
            <div>
            </div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Login</h1>
            </div>
            <div className="container">
                <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Inicie sesión</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">Usuario</h1>
                        <input
                            value={formulario.user}
                            type="text" name="usuario"
                            className="login-input"
                            placeholder="Usuario"
                            onChange={(e) => {
                                setformulario(
                                    {
                                        ...formulario,
                                        user: e.target.value
                                    }
                                )
                            }} />
                        <p>
                            {mensajes.user}
                        </p>
                        <br />

                        <h1 className="card-title pricing-card-title">Contraseña</h1>
                        <input
                            value={formulario.password}
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Contraseña"
                            onChange={(e) => {
                                setformulario(
                                    {
                                        ...formulario,
                                        password: e.target.value
                                    }
                                )
                            }}
                        />
                        <p>
                            {mensajes.password}
                        </p>
                        <br />
                        <button
                            className="btn btn-lg btn-block btn-primary"
                            id="Gest_Tar"
                            onClick={validarDatosP, validarDatosU}


>
                            Inicio
                        </button>
                        {/* <a type="button" className="btn btn-lg btn-block btn-primary" id="Gest_Tar" href='http://localhost:3000/ModuloDoc'>Inicio</a> */}
                        <br />
                        <a href="#" >Olvide mi contraseña</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;