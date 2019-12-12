import React from 'react';
import NavBar from '../components/Prueba';
import Footer from '../components/Footer';
import Main from '../components/Main';

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
                        <div className="card-body">
                            <article className='characterEst'>
                                <div>
                                    <h1 className="card-title pricing-card-title">Foto</h1>
                                    <p>Nataly</p>
                                </div>
                                <div className="charactercard-info">
                                    <div>
                                        <span>estado</span>
                                        <p>Proceso</p>
                                    </div>
                                </div>
                            </article>
                            <article className='characterEst'>
                                <div>
                                    <h1 className="card-title pricing-card-title">Foto</h1>
                                    <p>Nataly</p>
                                </div>
                                <div className="charactercard-info">
                                    <div>
                                        <p>estado</p>
                                        <span>Proceso</span>
                                    </div>
                                </div>
                            </article>
            
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
};

export default Ex;