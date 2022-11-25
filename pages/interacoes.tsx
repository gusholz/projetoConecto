import React from 'react';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ConteudoInteracoes from '../src/components/conteudo/conteudoInteracoes';
import '@nextcss/reset';
import styles from "./Footer.module.css"

export default function Interacoes(){
    return (
        <div>
            <div>
                <Header ativo={2}/>
                <ConteudoInteracoes/>
                <Footer/>
            </div>
        </div>
    )
}