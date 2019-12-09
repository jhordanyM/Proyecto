import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Main from '../components/Main'
const moduleDoc = () => {
    return(
        <>
            <NavBar 
                companyName="TITULO"
                changePassword ="Cambiar contraseña"
                profile = 'perfil'

            />
            <Main main="Venecosis"/>
            <Footer char="SOSPoli"/>
        </>
    )
};

export default moduleDoc;