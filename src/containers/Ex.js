import React from 'react';
import NavBar from '../components/Prueba';
import Footer from '../components/Footer';
import Main from '../components/Main';
import rick from '../components/images/rick.jpg';



const Ex = () => {
    return (
        <>
            <NavBar
                companyName="Dany"
                features="Caracteristicas"
            />
            <section class="showcase_students">
                <div className="container">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header-Students">
                            <img src={rick} alt='estudiante' />
                            <div classname='character_title'>
                                <div className='character_name'>
                                    <p>Rick</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">Usuario</h1>
                            <input type="text" name="usuario" className="login-input" placeholder="Usuario" /><br />

                            <h1 className="card-title pricing-card-title">Contraseña</h1>
                            <input
                                type="password"
                                name="password"
                                className="login-input"
                                placeholder="Contraseña" /><br /><br />
                            <a type="button" className="btn btn-lg btn-block btn-primary" id="Gest_Tar" href='http://localhost:3000/ModuloDoc'>Inicio</a>
                            <br />
                            <a href="#" >Olvide mi contraseña</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Ex;