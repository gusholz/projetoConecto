import React from 'react';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import Conteudo from '../src/components/conteudo/conteudo';
import '@nextcss/reset';

export default function Home(){
    return (
        <div>
            <div className='container'>
                <Header/>
                <div>Área Interativa</div>
                <Conteudo/>
                <Footer/>
            </div>
        </div>
    )
}