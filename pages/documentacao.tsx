import React from 'react';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ConteudoDocumentacao from '../src/components/conteudo/conteudoDocumentacao';
import '@nextcss/reset';

export default function Documentacao(){
    return (
        <div>
            <div>
                <Header/>
                <ConteudoDocumentacao/>
                <Footer/>
            </div>
        </div>
    )
}