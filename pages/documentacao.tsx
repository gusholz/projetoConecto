import React, {useState,useRef} from 'react';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ConteudoDocumentacao from '../src/components/conteudo/conteudoDocumentacao';
import '@nextcss/reset';

export default function Documentacao(): JSX.Element{
    let width:number;
    let inicialFontSize = 20;

    if (typeof window !== "undefined") {
        width = window.innerWidth;
      }
    
    const [tamanhoFonte,setTamanhoFonte] = useState(inicialFontSize);

    return (
        <div>
            <div>
                <Header tamanhoFonte={tamanhoFonte} setTamanhoFonte={setTamanhoFonte} ativo={3}/>
                <ConteudoDocumentacao tamanhoFonte={tamanhoFonte}/>
                <Footer/>
            </div>
        </div>
    )
}