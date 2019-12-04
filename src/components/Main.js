import React, {Component} from 'react';

class Main extends React.Component{

    constructor(props){
        super(props)
    }

   handleClick = asignaciones_Est =>{
       console.log('Click');
       window.open("https://www.w3schools.com");
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
                            <h1 className="card-title pricing-card-title"> Estudiantes</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Registro de estudiantes, validacion de estado y vinculacion del docente-estudiante</li>
                            </ul>
                            <button onClick={this.handleClick} type="button" className="btn btn-lg btn-block btn-primary" id="asignaciones_Est">Asignaciones</button>
                        </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Gestion Tiempo</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">Docentes</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Asignaciones de tiempo de las tareas realizadas por los estudiantes</li>
                            </ul>
                            <button onClick={this.handleClick} type="button" className="btn btn-lg btn-block btn-primary" id="asignaciones_Tiempo"> Asignaciones</button>
                        </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Gestion Tareas</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">Docentes</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Descripcion</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary" id="asignaciones_Tarea">Asignaciones</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Main;