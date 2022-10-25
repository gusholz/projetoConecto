import React from 'react';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import Conteudo from '../src/components/conteudo/conteudo';
import '@nextcss/reset';

export default function Interacoes(){
    return (
        <div>
            <div className='container'>
                <Header/>
                <Conteudo/>
                <Footer/>
            </div>
        </div>
    )
}