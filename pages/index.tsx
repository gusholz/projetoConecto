import React from 'react';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ConteudoHome from '../src/components/conteudo/conteudoHome';
import AreaInterativa from '../src/components/areaInterativa/areaInterativa';
import styles from "./Footer.module.css"
import '@nextcss/reset';

export default function Home(){
    return (
        <div>
            <div>
                <AreaInterativa/>
                <Header ativo={1}/>
                <ConteudoHome/>
                <Footer/>
            </div>
        </div>
    )
}