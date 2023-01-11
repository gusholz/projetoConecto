import React, {useState} from 'react';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ConteudoInteracoes from '../src/components/conteudo/conteudoInteracoes';
import '@nextcss/reset';

export default function Interacoes(): JSX.Element{

    let width:number;
    let inicialFontSize = 20;

    if (typeof window !== "undefined") {
        width = window.innerWidth;
      }
    
    const [tamanhoFonte,setTamanhoFonte] = useState(inicialFontSize);

    return (
        <div>
            <div>
                <Header tamanhoFonte={tamanhoFonte} setTamanhoFonte={setTamanhoFonte} ativo={2}/>
                <ConteudoInteracoes tamanhoFonte={tamanhoFonte}/>
                <Footer/>
            </div>
        </div>
    )
}