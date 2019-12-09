import React, {Component} from 'react';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            password : 'jhordany'
        }
        
    }
   

    
    render(){
        return(
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
                            <input type="text" name="usuario" className="login-input" placeholder="Usuario"/><br/><br/>
                
                           <h1 className="card-title pricing-card-title">Contraseña</h1>
                            <input
                             type="password"
                            name="password"
                            className="login-input"
                            placeholder="Contraseña"/><br/><br/>
                            <a type="button" className="btn btn-lg btn-block btn-primary" id="Gest_Tar" href='http://localhost:3000/ModuloDoc'>Inicio</a>
                            <br/>
                         <a href="#" >Olvide mi contraseña</a>
                        </div>
                        
                        </div>
                    </div>
            </>
        )
    }
}

export default Login;