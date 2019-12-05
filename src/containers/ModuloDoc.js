import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Main from '../components/Main'
const moduleDoc = () => {
    return(
        <>
            <NavBar 
                companyName="TITULO"
                features="Caracteristicas"
                pricing="Precios"
                support="Soporte"
                enterprise="Mis Productos"
            />
            <Main main="Venecosis"/>
            <Footer char="SOSPoli"/>
        </>
    )
};

export default moduleDoc;