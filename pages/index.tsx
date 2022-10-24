import React from 'react';
import Header from '../src/components/header/header';
import BlocoTextoHome from '../src/components/blocoTextoHome/blocoTexto';
import Footer from '../src/components/footer/footer';

export default function Home(){
    return (
        <>
            <div className='container'>
                <Header/>
                <div>Área Interativa</div>
                <BlocoTextoHome titulo="Sobre"/>
                <BlocoTextoHome titulo="Como?"/>
                <BlocoTextoHome titulo="Para quem?"/>
                <Footer/>
            </div>
        </>
    )
}