import React, {Component} from 'react';

class Main extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 class="display-4">Gestion Estudiantes</h1>
                    <p class="lead">Gestione de una manera rapida, simple y eficiente las asignaciones para los estudiantes en proceso de alfabaetización que se <br/> 
                    encuentran dentro del INEM tanto como a asociados externos de la institución. </p>
                </div>

                <div class="container">
                    <div class="card-deck mb-3 text-center">
                        <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Estudiante</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title"> Jhordany</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>Descripciones</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-primary">Asignaciones</button>
                        </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Estudiante</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">Duver</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>Descripciones</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-primary">Asignaciones</button>
                        </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Estudiante</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">Nataly</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>Descripciones</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-primary">Asignaciones</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Main;