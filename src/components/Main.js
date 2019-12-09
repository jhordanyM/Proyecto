import React, {Component} from 'react';

class Main extends React.Component{

    constructor(props){
        super(props)
    }

   handleClick = asignaciones_Est =>{
       console.log('Click');
   }
    
    render(){
        return(
            <>
            <div>
            </div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Modulo Docente</h1>
                    <p className="lead">Gestione de una manera rapida, simple y eficiente las tareas, asignacion de docentes y tiempo empleado por los estudiantes en proceso de alfabaetización que se  
                    encuentran dentro del INEM tanto como a asociados externos de la institución. </p>
                </div>

                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Gestion estudiante</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title"> Docente</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Gestion de estudiantes, estado y vinculacion del docente-estudiante.</li>
                            </ul>
                            <a href="http://localhost:3000/ex" type="button" className="btn btn-lg btn-block btn-primary" id="Gest_Est">Asignaciones</a>
                        </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Gestion Tiempo</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">Docente</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Gestion de tiempo de tareas empleadas o asignadas a los estudiantes.</li>
                            </ul>
                            <a href="#" type="button" className="btn btn-lg btn-block btn-primary" id="Gest_Tie">Asignaciones</a>
                        </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Gestion Tareas</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">Docente</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Gestion de tares y asignaciones a los estudiantes.</li>
                            </ul>
                            <a href="#" type="button" className="btn btn-lg btn-block btn-primary" id="Gest_Tar">Asignaciones</a>

                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Main;